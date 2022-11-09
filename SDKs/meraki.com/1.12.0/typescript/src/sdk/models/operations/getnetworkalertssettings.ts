import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkAlertsSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkAlertsSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkAlertsSettingsPathParams;
}


export class GetNetworkAlertsSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkAlertsSettings200ApplicationJsonObject?: Map<string, any>;
}
