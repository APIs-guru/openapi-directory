import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkEventsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkEventsProductTypeEnum {
    Wireless = "wireless",
    Appliance = "appliance",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Camera = "camera",
    CellularGateway = "cellularGateway"
}
export declare class GetNetworkEventsQueryParams extends SpeakeasyBase {
    clientIp?: string;
    clientMac?: string;
    clientName?: string;
    deviceMac?: string;
    deviceName?: string;
    deviceSerial?: string;
    endingBefore?: string;
    excludedEventTypes?: string[];
    includedEventTypes?: string[];
    perPage?: number;
    productType?: GetNetworkEventsProductTypeEnum;
    smDeviceMac?: string;
    smDeviceName?: string;
    startingAfter?: string;
}
export declare class GetNetworkEventsRequest extends SpeakeasyBase {
    pathParams: GetNetworkEventsPathParams;
    queryParams: GetNetworkEventsQueryParams;
}
export declare class GetNetworkEventsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkEvents200ApplicationJsonObject?: Map<string, any>;
}
