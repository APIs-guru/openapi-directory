import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZonesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DnsManagedZonesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DnsManagedZonesSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesSetIamPolicySecurity extends SpeakeasyBase {
    option1?: DnsManagedZonesSetIamPolicySecurityOption1;
    option2?: DnsManagedZonesSetIamPolicySecurityOption2;
}
export declare class DnsManagedZonesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DnsManagedZonesSetIamPolicyPathParams;
    queryParams: DnsManagedZonesSetIamPolicyQueryParams;
    request?: shared.GoogleIamV1SetIamPolicyRequest;
    security: DnsManagedZonesSetIamPolicySecurity;
}
export declare class DnsManagedZonesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
