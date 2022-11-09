import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkSwitchStackRoutingInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}

export enum CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled"
,    Enabled = "enabled"
,    IgmpSnoopingQuerier = "IGMP snooping querier"
}


// CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings
/** 
 * The OSPF routing settings of the interface.
**/
export class CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=area" })
  area?: string;

  @Metadata({ data: "json, name=cost" })
  cost?: number;

  @Metadata({ data: "json, name=isPassiveEnabled" })
  isPassiveEnabled?: boolean;
}


export class CreateNetworkSwitchStackRoutingInterfaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultGateway" })
  defaultGateway?: string;

  @Metadata({ data: "json, name=interfaceIp" })
  interfaceIp: string;

  @Metadata({ data: "json, name=multicastRouting" })
  multicastRouting?: CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=ospfSettings" })
  ospfSettings?: CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;

  @Metadata({ data: "json, name=subnet" })
  subnet: string;

  @Metadata({ data: "json, name=vlanId" })
  vlanId: number;
}


export class CreateNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkSwitchStackRoutingInterfacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchStackRoutingInterfaceRequestBody;
}


export class CreateNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkSwitchStackRoutingInterface201ApplicationJsonObject?: Map<string, any>;
}
