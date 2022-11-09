import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceVlansSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceVlansSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceVlansSettingsPathParams;
}


export class GetNetworkApplianceVlansSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceVlansSettings200ApplicationJsonObject?: Map<string, any>;
}
