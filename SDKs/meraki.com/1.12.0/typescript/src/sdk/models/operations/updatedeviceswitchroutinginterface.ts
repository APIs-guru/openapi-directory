import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled"
,    Enabled = "enabled"
,    IgmpSnoopingQuerier = "IGMP snooping querier"
}


// UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings
/** 
 * The OSPF routing settings of the interface.
**/
export class UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=area" })
  area?: string;

  @Metadata({ data: "json, name=cost" })
  cost?: number;

  @Metadata({ data: "json, name=isPassiveEnabled" })
  isPassiveEnabled?: boolean;
}


export class UpdateDeviceSwitchRoutingInterfaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=interfaceIp" })
  interfaceIp?: string;

  @Metadata({ data: "json, name=multicastRouting" })
  multicastRouting?: UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ospfSettings" })
  ospfSettings?: UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;

  @Metadata({ data: "json, name=vlanId" })
  vlanId?: number;
}


export class UpdateDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceSwitchRoutingInterfacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceSwitchRoutingInterfaceRequestBody;
}


export class UpdateDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceSwitchRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
