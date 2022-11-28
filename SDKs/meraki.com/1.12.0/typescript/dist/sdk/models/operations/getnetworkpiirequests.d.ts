import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkPiiRequestsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkPiiRequestsRequest extends SpeakeasyBase {
    pathParams: GetNetworkPiiRequestsPathParams;
}
export declare class GetNetworkPiiRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkPiiRequests200ApplicationJsonObject?: Map<string, any>;
}
