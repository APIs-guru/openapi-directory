import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidHotspot20PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidHotspot20Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidHotspot20PathParams;
}


export class GetNetworkWirelessSsidHotspot20Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidHotspot20200ApplicationJsonObject?: Map<string, any>;
}
