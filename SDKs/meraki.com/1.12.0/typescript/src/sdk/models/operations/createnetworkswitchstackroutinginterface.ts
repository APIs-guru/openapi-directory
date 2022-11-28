import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkSwitchStackRoutingInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}

export enum CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    IgmpSnoopingQuerier = "IGMP snooping querier"
}


// CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings
/** 
 * The OSPF routing settings of the interface.
**/
export class CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: string;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=isPassiveEnabled" })
  isPassiveEnabled?: boolean;
}


export class CreateNetworkSwitchStackRoutingInterfaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultGateway" })
  defaultGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=interfaceIp" })
  interfaceIp: string;

  @SpeakeasyMetadata({ data: "json, name=multicastRouting" })
  multicastRouting?: CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ospfSettings" })
  ospfSettings?: CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet: string;

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId: number;
}


export class CreateNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkSwitchStackRoutingInterfacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchStackRoutingInterfaceRequestBody;
}


export class CreateNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkSwitchStackRoutingInterface201ApplicationJsonObject?: Map<string, any>;
}
