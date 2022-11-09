import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkMqttBrokerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mqttBrokerId" })
  mqttBrokerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkMqttBrokerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkMqttBrokerPathParams;
}


export class DeleteNetworkMqttBrokerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
