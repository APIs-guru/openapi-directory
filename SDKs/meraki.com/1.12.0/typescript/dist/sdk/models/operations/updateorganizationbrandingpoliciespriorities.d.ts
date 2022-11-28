import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationBrandingPoliciesPrioritiesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class UpdateOrganizationBrandingPoliciesPrioritiesRequestBody extends SpeakeasyBase {
    brandingPolicyIds: string[];
}
export declare class UpdateOrganizationBrandingPoliciesPrioritiesRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationBrandingPoliciesPrioritiesPathParams;
    request: UpdateOrganizationBrandingPoliciesPrioritiesRequestBody;
}
export declare class UpdateOrganizationBrandingPoliciesPrioritiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationBrandingPoliciesPriorities200ApplicationJsonObject?: Map<string, any>;
}
