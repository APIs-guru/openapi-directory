import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationBrandingPolicyPathParams extends SpeakeasyBase {
    brandingPolicyId: string;
    organizationId: string;
}
export declare class GetOrganizationBrandingPolicyRequest extends SpeakeasyBase {
    pathParams: GetOrganizationBrandingPolicyPathParams;
}
export declare class GetOrganizationBrandingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationBrandingPolicy200ApplicationJsonObject?: Map<string, any>;
}
