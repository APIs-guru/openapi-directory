import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkMqttBrokersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkMqttBrokersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkMqttBrokersPathParams;
}


export class GetNetworkMqttBrokersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkMqttBrokers200ApplicationJsonObject?: Map<string, any>;
}
