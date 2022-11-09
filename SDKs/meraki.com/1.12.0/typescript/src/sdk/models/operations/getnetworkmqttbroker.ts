import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkMqttBrokerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mqttBrokerId" })
  mqttBrokerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkMqttBrokerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkMqttBrokerPathParams;
}


export class GetNetworkMqttBrokerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkMqttBroker200ApplicationJsonObject?: Map<string, any>;
}
