import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkMqttBrokerPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkMqttBrokerRequestBody extends SpeakeasyBase {
    host: string;
    name: string;
    port: number;
}
export declare class CreateNetworkMqttBrokerRequest extends SpeakeasyBase {
    pathParams: CreateNetworkMqttBrokerPathParams;
    request: CreateNetworkMqttBrokerRequestBody;
}
export declare class CreateNetworkMqttBrokerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkMqttBroker201ApplicationJsonObject?: Map<string, any>;
}
