import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessRfProfilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWirelessRfProfilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTemplateProfiles" })
  includeTemplateProfiles?: boolean;
}


export class GetNetworkWirelessRfProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessRfProfilesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkWirelessRfProfilesQueryParams;
}


export class GetNetworkWirelessRfProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessRfProfiles200ApplicationJsonObject?: Map<string, any>;
}
