import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmUserAccessDevicesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSmUserAccessDevicesQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetNetworkSmUserAccessDevicesRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmUserAccessDevicesPathParams;
    queryParams: GetNetworkSmUserAccessDevicesQueryParams;
}
export declare class GetNetworkSmUserAccessDevicesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkSmUserAccessDevices200ApplicationJsonObject?: Map<string, any>;
}
