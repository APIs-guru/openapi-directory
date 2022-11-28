import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkMqttBrokerPathParams extends SpeakeasyBase {
    mqttBrokerId: string;
    networkId: string;
}
export declare class UpdateNetworkMqttBrokerRequestBody extends SpeakeasyBase {
    host?: string;
    name?: string;
    port?: number;
}
export declare class UpdateNetworkMqttBrokerRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkMqttBrokerPathParams;
    request?: UpdateNetworkMqttBrokerRequestBody;
}
export declare class UpdateNetworkMqttBrokerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkMqttBroker200ApplicationJsonObject?: Map<string, any>;
}
