import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchAlternateManagementInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum {
    Radius = "radius"
,    Snmp = "snmp"
,    Syslog = "syslog"
}


export class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateManagementIp" })
  alternateManagementIp: string;

  @Metadata({ data: "json, name=serial" })
  serial: string;
}


export class UpdateNetworkSwitchAlternateManagementInterfaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=protocols" })
  protocols?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum[];

  @Metadata({ data: "json, name=switches", elemType: operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches })
  switches?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches[];

  @Metadata({ data: "json, name=vlanId" })
  vlanId?: number;
}


export class UpdateNetworkSwitchAlternateManagementInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchAlternateManagementInterfacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBody;
}


export class UpdateNetworkSwitchAlternateManagementInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
