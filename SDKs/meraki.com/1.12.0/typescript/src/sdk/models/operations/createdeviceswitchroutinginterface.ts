import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled"
,    Enabled = "enabled"
,    IgmpSnoopingQuerier = "IGMP snooping querier"
}


// CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings
/** 
 * The OSPF routing settings of the interface.
**/
export class CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=area" })
  area?: string;

  @Metadata({ data: "json, name=cost" })
  cost?: number;

  @Metadata({ data: "json, name=isPassiveEnabled" })
  isPassiveEnabled?: boolean;
}


export class CreateDeviceSwitchRoutingInterfaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultGateway" })
  defaultGateway?: string;

  @Metadata({ data: "json, name=interfaceIp" })
  interfaceIp: string;

  @Metadata({ data: "json, name=multicastRouting" })
  multicastRouting?: CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=ospfSettings" })
  ospfSettings?: CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;

  @Metadata({ data: "json, name=vlanId" })
  vlanId: number;
}


export class CreateDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDeviceSwitchRoutingInterfacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDeviceSwitchRoutingInterfaceRequestBody;
}


export class CreateDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDeviceSwitchRoutingInterface201ApplicationJsonObject?: Map<string, any>;
}
