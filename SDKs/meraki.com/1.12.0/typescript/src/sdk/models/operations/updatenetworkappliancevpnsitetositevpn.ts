import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceVpnSiteToSiteVpnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hubId" })
  hubId: string;

  @SpeakeasyMetadata({ data: "json, name=useDefaultRoute" })
  useDefaultRoute?: boolean;
}

export enum UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum {
    None = "none",
    Spoke = "spoke",
    Hub = "hub"
}


export class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localSubnet" })
  localSubnet: string;

  @SpeakeasyMetadata({ data: "json, name=useVpn" })
  useVpn?: boolean;
}


export class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hubs", elemType: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs })
  hubs?: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs[];

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=subnets", elemType: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets })
  subnets?: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets[];
}


export class UpdateNetworkApplianceVpnSiteToSiteVpnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceVpnSiteToSiteVpnPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
}


export class UpdateNetworkApplianceVpnSiteToSiteVpnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJsonObject?: Map<string, any>;
}
