import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessBillingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWirelessBillingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessBillingPathParams;
}


export class GetNetworkWirelessBillingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessBilling200ApplicationJsonObject?: Map<string, any>;
}
