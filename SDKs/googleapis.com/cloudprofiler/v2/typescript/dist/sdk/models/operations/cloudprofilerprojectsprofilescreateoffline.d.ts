import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudprofilerProjectsProfilesCreateOfflinePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudprofilerProjectsProfilesCreateOfflineQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudprofilerProjectsProfilesCreateOfflineSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprofilerProjectsProfilesCreateOfflineSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprofilerProjectsProfilesCreateOfflineSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprofilerProjectsProfilesCreateOfflineSecurity extends SpeakeasyBase {
    option1?: CloudprofilerProjectsProfilesCreateOfflineSecurityOption1;
    option2?: CloudprofilerProjectsProfilesCreateOfflineSecurityOption2;
    option3?: CloudprofilerProjectsProfilesCreateOfflineSecurityOption3;
}
export declare class CloudprofilerProjectsProfilesCreateOfflineRequest extends SpeakeasyBase {
    pathParams: CloudprofilerProjectsProfilesCreateOfflinePathParams;
    queryParams: CloudprofilerProjectsProfilesCreateOfflineQueryParams;
    request?: shared.Profile;
    security: CloudprofilerProjectsProfilesCreateOfflineSecurity;
}
export declare class CloudprofilerProjectsProfilesCreateOfflineResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
}
