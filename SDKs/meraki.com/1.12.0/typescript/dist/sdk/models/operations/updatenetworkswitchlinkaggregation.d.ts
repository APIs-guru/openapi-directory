import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchLinkAggregationPathParams extends SpeakeasyBase {
    linkAggregationId: string;
    networkId: string;
}
export declare class UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts extends SpeakeasyBase {
    portId: string;
    serial: string;
}
export declare class UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts extends SpeakeasyBase {
    portId: string;
    profile: string;
}
export declare class UpdateNetworkSwitchLinkAggregationRequestBody extends SpeakeasyBase {
    switchPorts?: UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts[];
    switchProfilePorts?: UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[];
}
export declare class UpdateNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchLinkAggregationPathParams;
    request?: UpdateNetworkSwitchLinkAggregationRequestBody;
}
export declare class UpdateNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchLinkAggregation200ApplicationJsonObject?: Map<string, any>;
}
