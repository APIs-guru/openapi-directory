import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchStackRoutingInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}

export enum UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled"
,    Enabled = "enabled"
,    IgmpSnoopingQuerier = "IGMP snooping querier"
}


// UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings
/** 
 * The OSPF routing settings of the interface.
**/
export class UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=area" })
  area?: string;

  @Metadata({ data: "json, name=cost" })
  cost?: number;

  @Metadata({ data: "json, name=isPassiveEnabled" })
  isPassiveEnabled?: boolean;
}


export class UpdateNetworkSwitchStackRoutingInterfaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=interfaceIp" })
  interfaceIp?: string;

  @Metadata({ data: "json, name=multicastRouting" })
  multicastRouting?: UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ospfSettings" })
  ospfSettings?: UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;

  @Metadata({ data: "json, name=vlanId" })
  vlanId?: number;
}


export class UpdateNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchStackRoutingInterfacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
}


export class UpdateNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchStackRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
