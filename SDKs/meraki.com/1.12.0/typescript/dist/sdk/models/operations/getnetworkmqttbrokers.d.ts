import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkMqttBrokersPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkMqttBrokersRequest extends SpeakeasyBase {
    pathParams: GetNetworkMqttBrokersPathParams;
}
export declare class GetNetworkMqttBrokersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkMqttBrokers200ApplicationJsonObject?: Map<string, any>;
}
