import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkApplianceVpnSiteToSiteVpnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceVpnSiteToSiteVpnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkApplianceVpnSiteToSiteVpnPathParams;
}


export class GetNetworkApplianceVpnSiteToSiteVpnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkApplianceVpnSiteToSiteVpn200ApplicationJsonObject?: Map<string, any>;
}
