import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidBonjourForwardingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum {
    AllServices = "All Services"
,    AirPlay = "AirPlay"
,    Afp = "AFP"
,    BitTorrent = "BitTorrent"
,    Ftp = "FTP"
,    IChat = "iChat"
,    ITunes = "iTunes"
,    Printers = "Printers"
,    Samba = "Samba"
,    Scanners = "Scanners"
,    Ssh = "SSH"
}


export class UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=services" })
  services: UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[];

  @Metadata({ data: "json, name=vlanId" })
  vlanId: string;
}


export class UpdateNetworkWirelessSsidBonjourForwardingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules })
  rules?: UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules[];
}


export class UpdateNetworkWirelessSsidBonjourForwardingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidBonjourForwardingPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
}


export class UpdateNetworkWirelessSsidBonjourForwardingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidBonjourForwarding200ApplicationJsonObject?: Map<string, any>;
}
