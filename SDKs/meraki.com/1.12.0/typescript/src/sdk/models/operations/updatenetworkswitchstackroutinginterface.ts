import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchStackRoutingInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}

export enum UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    IgmpSnoopingQuerier = "IGMP snooping querier"
}


// UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings
/** 
 * The OSPF routing settings of the interface.
**/
export class UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: string;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=isPassiveEnabled" })
  isPassiveEnabled?: boolean;
}


export class UpdateNetworkSwitchStackRoutingInterfaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interfaceIp" })
  interfaceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=multicastRouting" })
  multicastRouting?: UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ospfSettings" })
  ospfSettings?: UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId?: number;
}


export class UpdateNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchStackRoutingInterfacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
}


export class UpdateNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchStackRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
