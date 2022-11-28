import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams;
    queryParams: SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams;
    request?: shared.GoogleCloudSecuritycenterV1ExternalSystem;
    security: SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity;
}
export declare class SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudSecuritycenterV1ExternalSystem?: shared.GoogleCloudSecuritycenterV1ExternalSystem;
    statusCode: number;
}
