import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkCellularGatewayDhcpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkCellularGatewayDhcpRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dhcpLeaseTime" })
  dhcpLeaseTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dnsCustomNameservers" })
  dnsCustomNameservers?: string[];

  @SpeakeasyMetadata({ data: "json, name=dnsNameservers" })
  dnsNameservers?: string;
}


export class UpdateNetworkCellularGatewayDhcpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkCellularGatewayDhcpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCellularGatewayDhcpRequestBody;
}


export class UpdateNetworkCellularGatewayDhcpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkCellularGatewayDhcp200ApplicationJsonObject?: Map<string, any>;
}
