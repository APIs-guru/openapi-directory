import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NetworkConfigConnectModeEnum {
    ConnectModeUnspecified = "CONNECT_MODE_UNSPECIFIED",
    DirectPeering = "DIRECT_PEERING",
    PrivateServiceAccess = "PRIVATE_SERVICE_ACCESS"
}

export enum NetworkConfigModesEnum {
    AddressModeUnspecified = "ADDRESS_MODE_UNSPECIFIED",
    ModeIpv4 = "MODE_IPV4"
}


// NetworkConfig
/** 
 * Network configuration for the instance.
**/
export class NetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectMode" })
  connectMode?: NetworkConfigConnectModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ipAddresses" })
  ipAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=modes" })
  modes?: NetworkConfigModesEnum[];

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;
}


// NetworkConfigInput
/** 
 * Network configuration for the instance.
**/
export class NetworkConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectMode" })
  connectMode?: NetworkConfigConnectModeEnum;

  @SpeakeasyMetadata({ data: "json, name=modes" })
  modes?: NetworkConfigModesEnum[];

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;
}
