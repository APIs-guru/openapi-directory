import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NetworkConfigConnectModeEnum {
    ConnectModeUnspecified = "CONNECT_MODE_UNSPECIFIED"
,    DirectPeering = "DIRECT_PEERING"
,    PrivateServiceAccess = "PRIVATE_SERVICE_ACCESS"
}

export enum NetworkConfigModesEnum {
    AddressModeUnspecified = "ADDRESS_MODE_UNSPECIFIED"
,    ModeIpv4 = "MODE_IPV4"
}


// NetworkConfig
/** 
 * Network configuration for the instance.
**/
export class NetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectMode" })
  connectMode?: NetworkConfigConnectModeEnum;

  @Metadata({ data: "json, name=ipAddresses" })
  ipAddresses?: string[];

  @Metadata({ data: "json, name=modes" })
  modes?: NetworkConfigModesEnum[];

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;
}
