import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    IgmpSnoopingQuerier = "IGMP snooping querier"
}


// UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings
/** 
 * The OSPF routing settings of the interface.
**/
export class UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: string;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=isPassiveEnabled" })
  isPassiveEnabled?: boolean;
}


export class UpdateDeviceSwitchRoutingInterfaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interfaceIp" })
  interfaceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=multicastRouting" })
  multicastRouting?: UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ospfSettings" })
  ospfSettings?: UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId?: number;
}


export class UpdateDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceSwitchRoutingInterfacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceSwitchRoutingInterfaceRequestBody;
}


export class UpdateDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceSwitchRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
