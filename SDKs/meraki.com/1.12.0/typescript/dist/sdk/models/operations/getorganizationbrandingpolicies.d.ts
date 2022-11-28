import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationBrandingPoliciesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationBrandingPoliciesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationBrandingPoliciesPathParams;
}
export declare class GetOrganizationBrandingPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationBrandingPolicies200ApplicationJsonObject?: Map<string, any>;
}
