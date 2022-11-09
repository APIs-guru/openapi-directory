import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceVlansSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceVlansSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=vlansEnabled" })
  vlansEnabled?: boolean;
}


export class UpdateNetworkApplianceVlansSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceVlansSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceVlansSettingsRequestBody;
}


export class UpdateNetworkApplianceVlansSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceVlansSettings200ApplicationJsonObject?: Map<string, any>;
}
