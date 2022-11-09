import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkMqttBrokerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mqttBrokerId" })
  mqttBrokerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkMqttBrokerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}


export class UpdateNetworkMqttBrokerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkMqttBrokerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkMqttBrokerRequestBody;
}


export class UpdateNetworkMqttBrokerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkMqttBroker200ApplicationJsonObject?: Map<string, any>;
}
