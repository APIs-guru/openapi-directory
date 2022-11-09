import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkCellularGatewayDhcpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkCellularGatewayDhcpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dhcpLeaseTime" })
  dhcpLeaseTime?: string;

  @Metadata({ data: "json, name=dnsCustomNameservers" })
  dnsCustomNameservers?: string[];

  @Metadata({ data: "json, name=dnsNameservers" })
  dnsNameservers?: string;
}


export class UpdateNetworkCellularGatewayDhcpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkCellularGatewayDhcpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCellularGatewayDhcpRequestBody;
}


export class UpdateNetworkCellularGatewayDhcpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkCellularGatewayDhcp200ApplicationJsonObject?: Map<string, any>;
}
