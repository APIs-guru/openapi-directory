import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchRoutingMulticastPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
**/
export declare class UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings extends SpeakeasyBase {
    floodUnknownMulticastTrafficEnabled?: boolean;
    igmpSnoopingEnabled?: boolean;
}
export declare class UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides extends SpeakeasyBase {
    floodUnknownMulticastTrafficEnabled: boolean;
    igmpSnoopingEnabled: boolean;
    stacks?: string[];
    switchProfiles?: string[];
    switches?: string[];
}
export declare class UpdateNetworkSwitchRoutingMulticastRequestBody extends SpeakeasyBase {
    defaultSettings?: UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;
    overrides?: UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides[];
}
export declare class UpdateNetworkSwitchRoutingMulticastRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchRoutingMulticastPathParams;
    request?: UpdateNetworkSwitchRoutingMulticastRequestBody;
}
export declare class UpdateNetworkSwitchRoutingMulticastResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchRoutingMulticast200ApplicationJsonObject?: Map<string, any>;
}
