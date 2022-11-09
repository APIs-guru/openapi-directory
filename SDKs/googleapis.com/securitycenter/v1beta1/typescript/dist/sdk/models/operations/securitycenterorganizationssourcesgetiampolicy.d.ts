import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class SecuritycenterOrganizationsSourcesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterOrganizationsSourcesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesGetIamPolicyPathParams;
    queryParams: SecuritycenterOrganizationsSourcesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: SecuritycenterOrganizationsSourcesGetIamPolicySecurity;
}
export declare class SecuritycenterOrganizationsSourcesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
