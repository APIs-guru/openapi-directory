import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprofilerProjectsProfilesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudprofilerProjectsProfilesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudprofilerProjectsProfilesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprofilerProjectsProfilesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprofilerProjectsProfilesPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprofilerProjectsProfilesPatchSecurity extends SpeakeasyBase {
    option1?: CloudprofilerProjectsProfilesPatchSecurityOption1;
    option2?: CloudprofilerProjectsProfilesPatchSecurityOption2;
    option3?: CloudprofilerProjectsProfilesPatchSecurityOption3;
}
export declare class CloudprofilerProjectsProfilesPatchRequest extends SpeakeasyBase {
    pathParams: CloudprofilerProjectsProfilesPatchPathParams;
    queryParams: CloudprofilerProjectsProfilesPatchQueryParams;
    request?: shared.ProfileInput;
    security: CloudprofilerProjectsProfilesPatchSecurity;
}
export declare class CloudprofilerProjectsProfilesPatchResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
}
