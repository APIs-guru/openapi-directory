import { SpeakeasyBase } from "../../../internal/utils";
export declare class CombineOrganizationNetworksPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class CombineOrganizationNetworksRequestBody extends SpeakeasyBase {
    enrollmentString?: string;
    name: string;
    networkIds: string[];
}
export declare class CombineOrganizationNetworksRequest extends SpeakeasyBase {
    pathParams: CombineOrganizationNetworksPathParams;
    request: CombineOrganizationNetworksRequestBody;
}
export declare class CombineOrganizationNetworksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    combineOrganizationNetworks200ApplicationJsonObject?: Map<string, any>;
}
