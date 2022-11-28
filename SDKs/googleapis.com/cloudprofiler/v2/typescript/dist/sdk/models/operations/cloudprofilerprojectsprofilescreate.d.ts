import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprofilerProjectsProfilesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudprofilerProjectsProfilesCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudprofilerProjectsProfilesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprofilerProjectsProfilesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprofilerProjectsProfilesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprofilerProjectsProfilesCreateSecurity extends SpeakeasyBase {
    option1?: CloudprofilerProjectsProfilesCreateSecurityOption1;
    option2?: CloudprofilerProjectsProfilesCreateSecurityOption2;
    option3?: CloudprofilerProjectsProfilesCreateSecurityOption3;
}
export declare class CloudprofilerProjectsProfilesCreateRequest extends SpeakeasyBase {
    pathParams: CloudprofilerProjectsProfilesCreatePathParams;
    queryParams: CloudprofilerProjectsProfilesCreateQueryParams;
    request?: shared.CreateProfileRequest;
    security: CloudprofilerProjectsProfilesCreateSecurity;
}
export declare class CloudprofilerProjectsProfilesCreateResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
}
