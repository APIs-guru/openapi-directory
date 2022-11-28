import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkMqttBrokerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mqttBrokerId" })
  mqttBrokerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkMqttBrokerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkMqttBrokerPathParams;
}


export class GetNetworkMqttBrokerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkMqttBroker200ApplicationJsonObject?: Map<string, any>;
}
