import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkMqttBrokersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkMqttBrokersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkMqttBrokersPathParams;
}


export class GetNetworkMqttBrokersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkMqttBrokers200ApplicationJsonObject?: Map<string, any>;
}
