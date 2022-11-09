import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkMqttBrokerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkMqttBrokerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=port" })
  port: number;
}


export class CreateNetworkMqttBrokerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkMqttBrokerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkMqttBrokerRequestBody;
}


export class CreateNetworkMqttBrokerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkMqttBroker201ApplicationJsonObject?: Map<string, any>;
}
