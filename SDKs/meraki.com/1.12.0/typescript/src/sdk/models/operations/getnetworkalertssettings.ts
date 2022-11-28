import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkAlertsSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkAlertsSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkAlertsSettingsPathParams;
}


export class GetNetworkAlertsSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkAlertsSettings200ApplicationJsonObject?: Map<string, any>;
}
