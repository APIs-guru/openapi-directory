import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterOrganizationsSourcesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesSetIamPolicyPathParams;
    queryParams: SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: SecuritycenterOrganizationsSourcesSetIamPolicySecurity;
}
export declare class SecuritycenterOrganizationsSourcesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
