import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessSsidHotspot20PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidHotspot20Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessSsidHotspot20PathParams;
}


export class GetNetworkWirelessSsidHotspot20Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessSsidHotspot20200ApplicationJsonObject?: Map<string, any>;
}
