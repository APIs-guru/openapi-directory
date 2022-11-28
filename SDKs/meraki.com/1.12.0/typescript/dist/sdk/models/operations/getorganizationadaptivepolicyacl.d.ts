import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
    id: string;
    organizationId: string;
}
export declare class GetOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
    pathParams: GetOrganizationAdaptivePolicyAclPathParams;
}
export declare class GetOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationAdaptivePolicyAcl200ApplicationJsonObject?: Map<string, any>;
}
