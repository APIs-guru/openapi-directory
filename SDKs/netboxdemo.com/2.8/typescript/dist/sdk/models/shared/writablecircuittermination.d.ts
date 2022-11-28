import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCableInput } from "./nestedcable";
export declare enum WritableCircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}
export declare class WritableCircuitTerminationInput extends SpeakeasyBase {
    cable?: NestedCableInput;
    circuit: number;
    connectionStatus?: boolean;
    description?: string;
    portSpeed: number;
    ppInfo?: string;
    site: number;
    termSide: WritableCircuitTerminationTerminationEnum;
    upstreamSpeed?: number;
    xconnectId?: string;
}
