import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessAlternateManagementInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateManagementIp" })
  alternateManagementIp: string;

  @SpeakeasyMetadata({ data: "json, name=dns1" })
  dns1?: string;

  @SpeakeasyMetadata({ data: "json, name=dns2" })
  dns2?: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway?: string;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial: string;

  @SpeakeasyMetadata({ data: "json, name=subnetMask" })
  subnetMask?: string;
}

export enum UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum {
    Radius = "radius",
    Snmp = "snmp",
    Syslog = "syslog",
    Ldap = "ldap"
}


export class UpdateNetworkWirelessAlternateManagementInterfaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPoints", elemType: UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints })
  accessPoints?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=protocols" })
  protocols?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum[];

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId?: number;
}


export class UpdateNetworkWirelessAlternateManagementInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessAlternateManagementInterfacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
}


export class UpdateNetworkWirelessAlternateManagementInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
