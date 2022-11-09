import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchRoutingMulticastPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings
/** 
 * Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
**/
export class UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=floodUnknownMulticastTrafficEnabled" })
  floodUnknownMulticastTrafficEnabled?: boolean;

  @Metadata({ data: "json, name=igmpSnoopingEnabled" })
  igmpSnoopingEnabled?: boolean;
}


export class UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides extends SpeakeasyBase {
  @Metadata({ data: "json, name=floodUnknownMulticastTrafficEnabled" })
  floodUnknownMulticastTrafficEnabled: boolean;

  @Metadata({ data: "json, name=igmpSnoopingEnabled" })
  igmpSnoopingEnabled: boolean;

  @Metadata({ data: "json, name=stacks" })
  stacks?: string[];

  @Metadata({ data: "json, name=switchProfiles" })
  switchProfiles?: string[];

  @Metadata({ data: "json, name=switches" })
  switches?: string[];
}


export class UpdateNetworkSwitchRoutingMulticastRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultSettings" })
  defaultSettings?: UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;

  @Metadata({ data: "json, name=overrides", elemType: operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides })
  overrides?: UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides[];
}


export class UpdateNetworkSwitchRoutingMulticastRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchRoutingMulticastPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchRoutingMulticastRequestBody;
}


export class UpdateNetworkSwitchRoutingMulticastResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchRoutingMulticast200ApplicationJsonObject?: Map<string, any>;
}
