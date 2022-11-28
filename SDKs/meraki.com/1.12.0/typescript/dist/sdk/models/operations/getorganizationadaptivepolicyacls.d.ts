import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationAdaptivePolicyAclsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationAdaptivePolicyAclsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationAdaptivePolicyAclsPathParams;
}
export declare class GetOrganizationAdaptivePolicyAclsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationAdaptivePolicyAcls200ApplicationJsonObject?: Map<string, any>;
}
