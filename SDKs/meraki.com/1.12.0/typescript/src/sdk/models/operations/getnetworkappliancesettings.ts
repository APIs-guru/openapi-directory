import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceSettingsPathParams;
}


export class GetNetworkApplianceSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceSettings200ApplicationJsonObject?: Map<string, any>;
}
