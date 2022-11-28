import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    IgmpSnoopingQuerier = "IGMP snooping querier"
}


// CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings
/** 
 * The OSPF routing settings of the interface.
**/
export class CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: string;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=isPassiveEnabled" })
  isPassiveEnabled?: boolean;
}


export class CreateDeviceSwitchRoutingInterfaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultGateway" })
  defaultGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=interfaceIp" })
  interfaceIp: string;

  @SpeakeasyMetadata({ data: "json, name=multicastRouting" })
  multicastRouting?: CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ospfSettings" })
  ospfSettings?: CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId: number;
}


export class CreateDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDeviceSwitchRoutingInterfacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDeviceSwitchRoutingInterfaceRequestBody;
}


export class CreateDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDeviceSwitchRoutingInterface201ApplicationJsonObject?: Map<string, any>;
}
