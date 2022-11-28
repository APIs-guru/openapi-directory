import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkSwitchLinkAggregationPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts extends SpeakeasyBase {
    portId: string;
    serial: string;
}
export declare class CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts extends SpeakeasyBase {
    portId: string;
    profile: string;
}
export declare class CreateNetworkSwitchLinkAggregationRequestBody extends SpeakeasyBase {
    switchPorts?: CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts[];
    switchProfilePorts?: CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[];
}
export declare class CreateNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
    pathParams: CreateNetworkSwitchLinkAggregationPathParams;
    request?: CreateNetworkSwitchLinkAggregationRequestBody;
}
export declare class CreateNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkSwitchLinkAggregation201ApplicationJsonObject?: Map<string, any>;
}
