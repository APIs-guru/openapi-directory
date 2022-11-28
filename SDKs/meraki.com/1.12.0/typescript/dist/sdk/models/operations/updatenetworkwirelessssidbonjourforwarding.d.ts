import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidBonjourForwardingPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare enum UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum {
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
export declare class UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules extends SpeakeasyBase {
    description?: string;
    services: UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[];
    vlanId: string;
}
export declare class UpdateNetworkWirelessSsidBonjourForwardingRequestBody extends SpeakeasyBase {
    enabled?: boolean;
    rules?: UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules[];
}
export declare class UpdateNetworkWirelessSsidBonjourForwardingRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidBonjourForwardingPathParams;
    request?: UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
}
export declare class UpdateNetworkWirelessSsidBonjourForwardingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidBonjourForwarding200ApplicationJsonObject?: Map<string, any>;
}
