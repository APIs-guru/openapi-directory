import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessAlternateManagementInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateManagementIp" })
  alternateManagementIp: string;

  @Metadata({ data: "json, name=dns1" })
  dns1?: string;

  @Metadata({ data: "json, name=dns2" })
  dns2?: string;

  @Metadata({ data: "json, name=gateway" })
  gateway?: string;

  @Metadata({ data: "json, name=serial" })
  serial: string;

  @Metadata({ data: "json, name=subnetMask" })
  subnetMask?: string;
}

export enum UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum {
    Radius = "radius"
,    Snmp = "snmp"
,    Syslog = "syslog"
,    Ldap = "ldap"
}


export class UpdateNetworkWirelessAlternateManagementInterfaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPoints", elemType: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints })
  accessPoints?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints[];

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=protocols" })
  protocols?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum[];

  @Metadata({ data: "json, name=vlanId" })
  vlanId?: number;
}


export class UpdateNetworkWirelessAlternateManagementInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessAlternateManagementInterfacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
}


export class UpdateNetworkWirelessAlternateManagementInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
