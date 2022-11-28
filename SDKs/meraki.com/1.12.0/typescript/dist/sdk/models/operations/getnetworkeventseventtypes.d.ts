import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkEventsEventTypesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkEventsEventTypesRequest extends SpeakeasyBase {
    pathParams: GetNetworkEventsEventTypesPathParams;
}
export declare class GetNetworkEventsEventTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkEventsEventTypes200ApplicationJsonObject?: Map<string, any>;
}
