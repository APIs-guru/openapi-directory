import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationBrandingPoliciesPrioritiesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationBrandingPoliciesPrioritiesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationBrandingPoliciesPrioritiesPathParams;
}
export declare class GetOrganizationBrandingPoliciesPrioritiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationBrandingPoliciesPriorities200ApplicationJsonObject?: Map<string, any>;
}
