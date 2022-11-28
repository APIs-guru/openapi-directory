import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableCircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}
export declare class WritableCircuitTerminationInput extends SpeakeasyBase {
    circuit: number;
    interface?: number;
    portSpeed: number;
    ppInfo?: string;
    site: number;
    termSide: WritableCircuitTerminationTerminationEnum;
    upstreamSpeed?: number;
    xconnectId?: string;
}
