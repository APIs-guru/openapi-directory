import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceVlansSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceVlansSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vlansEnabled" })
  vlansEnabled?: boolean;
}


export class UpdateNetworkApplianceVlansSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceVlansSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceVlansSettingsRequestBody;
}


export class UpdateNetworkApplianceVlansSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceVlansSettings200ApplicationJsonObject?: Map<string, any>;
}
