import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchAlternateManagementInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum {
    Radius = "radius",
    Snmp = "snmp",
    Syslog = "syslog"
}


export class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateManagementIp" })
  alternateManagementIp: string;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial: string;
}


export class UpdateNetworkSwitchAlternateManagementInterfaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=protocols" })
  protocols?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum[];

  @SpeakeasyMetadata({ data: "json, name=switches", elemType: UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches })
  switches?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches[];

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId?: number;
}


export class UpdateNetworkSwitchAlternateManagementInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchAlternateManagementInterfacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBody;
}


export class UpdateNetworkSwitchAlternateManagementInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
