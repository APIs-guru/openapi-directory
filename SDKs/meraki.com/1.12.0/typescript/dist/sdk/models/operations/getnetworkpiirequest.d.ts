import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkPiiRequestPathParams extends SpeakeasyBase {
    networkId: string;
    requestId: string;
}
export declare class GetNetworkPiiRequestRequest extends SpeakeasyBase {
    pathParams: GetNetworkPiiRequestPathParams;
}
export declare class GetNetworkPiiRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkPiiRequest200ApplicationJsonObject?: Map<string, any>;
}
