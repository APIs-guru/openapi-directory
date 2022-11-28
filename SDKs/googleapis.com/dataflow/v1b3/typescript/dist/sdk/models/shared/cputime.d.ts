import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Modeled after information exposed by /proc/stat.
**/
export declare class CpuTime extends SpeakeasyBase {
    rate?: number;
    timestamp?: string;
    totalMs?: string;
}
