import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessRfProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWirelessRfProfilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeTemplateProfiles" })
  includeTemplateProfiles?: boolean;
}


export class GetNetworkWirelessRfProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessRfProfilesPathParams;

  @Metadata()
  queryParams: GetNetworkWirelessRfProfilesQueryParams;
}


export class GetNetworkWirelessRfProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessRfProfiles200ApplicationJsonObject?: Map<string, any>;
}
