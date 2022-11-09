import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSettingsPathParams;
}


export class GetNetworkSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSettings200ApplicationJsonObject?: Map<string, any>;
}
