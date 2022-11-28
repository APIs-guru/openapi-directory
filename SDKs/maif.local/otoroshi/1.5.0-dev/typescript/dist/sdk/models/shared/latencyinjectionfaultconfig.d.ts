import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for large latency injection fault
**/
export declare class LatencyInjectionFaultConfig extends SpeakeasyBase {
    from: number;
    ratio: number;
    to: number;
}
