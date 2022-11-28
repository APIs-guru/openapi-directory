import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkMqttBrokerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkMqttBrokerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;
}


export class CreateNetworkMqttBrokerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkMqttBrokerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkMqttBrokerRequestBody;
}


export class CreateNetworkMqttBrokerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkMqttBroker201ApplicationJsonObject?: Map<string, any>;
}
