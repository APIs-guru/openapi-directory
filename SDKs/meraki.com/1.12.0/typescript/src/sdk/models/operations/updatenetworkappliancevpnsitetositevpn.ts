import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceVpnSiteToSiteVpnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs extends SpeakeasyBase {
  @Metadata({ data: "json, name=hubId" })
  hubId: string;

  @Metadata({ data: "json, name=useDefaultRoute" })
  useDefaultRoute?: boolean;
}

export enum UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum {
    None = "none"
,    Spoke = "spoke"
,    Hub = "hub"
}


export class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets extends SpeakeasyBase {
  @Metadata({ data: "json, name=localSubnet" })
  localSubnet: string;

  @Metadata({ data: "json, name=useVpn" })
  useVpn?: boolean;
}


export class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=hubs", elemType: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs })
  hubs?: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs[];

  @Metadata({ data: "json, name=mode" })
  mode: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;

  @Metadata({ data: "json, name=subnets", elemType: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets })
  subnets?: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets[];
}


export class UpdateNetworkApplianceVpnSiteToSiteVpnRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceVpnSiteToSiteVpnPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
}


export class UpdateNetworkApplianceVpnSiteToSiteVpnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJsonObject?: Map<string, any>;
}
