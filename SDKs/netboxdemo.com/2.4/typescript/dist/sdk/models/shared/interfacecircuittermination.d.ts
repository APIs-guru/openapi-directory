import { SpeakeasyBase } from "../../../internal/utils";
import { InterfaceNestedCircuit } from "./interfacenestedcircuit";
export declare enum InterfaceCircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}
export declare class InterfaceCircuitTermination extends SpeakeasyBase {
    circuit?: InterfaceNestedCircuit;
    id?: number;
    portSpeed: number;
    ppInfo?: string;
    termSide: InterfaceCircuitTerminationTerminationEnum;
    upstreamSpeed?: number;
    xconnectId?: string;
}
