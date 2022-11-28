import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZonesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DnsManagedZonesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DnsManagedZonesGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesGetIamPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesGetIamPolicySecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesGetIamPolicySecurity extends SpeakeasyBase {
    option1?: DnsManagedZonesGetIamPolicySecurityOption1;
    option2?: DnsManagedZonesGetIamPolicySecurityOption2;
    option3?: DnsManagedZonesGetIamPolicySecurityOption3;
    option4?: DnsManagedZonesGetIamPolicySecurityOption4;
}
export declare class DnsManagedZonesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DnsManagedZonesGetIamPolicyPathParams;
    queryParams: DnsManagedZonesGetIamPolicyQueryParams;
    request?: shared.GoogleIamV1GetIamPolicyRequest;
    security: DnsManagedZonesGetIamPolicySecurity;
}
export declare class DnsManagedZonesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
