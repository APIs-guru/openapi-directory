import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchPortSchedulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchPortSchedulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchPortSchedulesPathParams;
}
export declare class GetNetworkSwitchPortSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchPortSchedules200ApplicationJsonObject?: Map<string, any>;
}
