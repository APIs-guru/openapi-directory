import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCable } from "./nestedcable";
import { NestedCircuit } from "./nestedcircuit";
import { NestedSite } from "./nestedsite";
export declare enum CircuitTerminationConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}
export declare class CircuitTerminationConnectionStatus extends SpeakeasyBase {
    label: CircuitTerminationConnectionStatusLabelEnum;
    value: boolean;
}
export declare enum CircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}
export declare class CircuitTermination extends SpeakeasyBase {
    cable?: NestedCable;
    circuit: NestedCircuit;
    connectedEndpoint?: Map<string, string>;
    connectedEndpointType?: string;
    connectionStatus?: CircuitTerminationConnectionStatus;
    description?: string;
    id?: number;
    portSpeed: number;
    ppInfo?: string;
    site: NestedSite;
    termSide: CircuitTerminationTerminationEnum;
    upstreamSpeed?: number;
    xconnectId?: string;
}
