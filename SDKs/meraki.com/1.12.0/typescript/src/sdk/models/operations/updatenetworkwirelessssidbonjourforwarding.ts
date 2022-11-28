import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidBonjourForwardingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum {
    AllServices = "All Services",
    AirPlay = "AirPlay",
    Afp = "AFP",
    BitTorrent = "BitTorrent",
    Ftp = "FTP",
    IChat = "iChat",
    ITunes = "iTunes",
    Printers = "Printers",
    Samba = "Samba",
    Scanners = "Scanners",
    Ssh = "SSH"
}


export class UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=services" })
  services: UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[];

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId: string;
}


export class UpdateNetworkWirelessSsidBonjourForwardingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules })
  rules?: UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules[];
}


export class UpdateNetworkWirelessSsidBonjourForwardingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidBonjourForwardingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
}


export class UpdateNetworkWirelessSsidBonjourForwardingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsidBonjourForwarding200ApplicationJsonObject?: Map<string, any>;
}
