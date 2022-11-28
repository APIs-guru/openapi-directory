import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchRoutingMulticastPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings
/** 
 * Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
**/
export class UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floodUnknownMulticastTrafficEnabled" })
  floodUnknownMulticastTrafficEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=igmpSnoopingEnabled" })
  igmpSnoopingEnabled?: boolean;
}


export class UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floodUnknownMulticastTrafficEnabled" })
  floodUnknownMulticastTrafficEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=igmpSnoopingEnabled" })
  igmpSnoopingEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=stacks" })
  stacks?: string[];

  @SpeakeasyMetadata({ data: "json, name=switchProfiles" })
  switchProfiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=switches" })
  switches?: string[];
}


export class UpdateNetworkSwitchRoutingMulticastRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultSettings" })
  defaultSettings?: UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;

  @SpeakeasyMetadata({ data: "json, name=overrides", elemType: UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides })
  overrides?: UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides[];
}


export class UpdateNetworkSwitchRoutingMulticastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchRoutingMulticastPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchRoutingMulticastRequestBody;
}


export class UpdateNetworkSwitchRoutingMulticastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchRoutingMulticast200ApplicationJsonObject?: Map<string, any>;
}
