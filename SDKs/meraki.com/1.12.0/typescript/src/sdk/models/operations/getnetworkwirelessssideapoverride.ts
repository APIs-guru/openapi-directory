import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidEapOverridePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidEapOverrideRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidEapOverridePathParams;
}


export class GetNetworkWirelessSsidEapOverrideResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidEapOverride200ApplicationJsonObject?: Map<string, any>;
}
