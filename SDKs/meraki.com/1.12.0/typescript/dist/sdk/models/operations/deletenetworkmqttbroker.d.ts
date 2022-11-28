import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkMqttBrokerPathParams extends SpeakeasyBase {
    mqttBrokerId: string;
    networkId: string;
}
export declare class DeleteNetworkMqttBrokerRequest extends SpeakeasyBase {
    pathParams: DeleteNetworkMqttBrokerPathParams;
}
export declare class DeleteNetworkMqttBrokerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
