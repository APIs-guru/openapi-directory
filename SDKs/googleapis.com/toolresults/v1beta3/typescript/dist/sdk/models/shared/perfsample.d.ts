import { SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
/**
 * Resource representing a single performance measure or data point
**/
export declare class PerfSample extends SpeakeasyBase {
    sampleTime?: Timestamp;
    value?: number;
}
