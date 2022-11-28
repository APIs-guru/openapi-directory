import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Utilization metrics values for a single VM.
**/
export declare class VmUtilizationMetrics extends SpeakeasyBase {
    cpuAveragePercent?: number;
    cpuMaxPercent?: number;
    diskIoRateAverageKbps?: string;
    diskIoRateMaxKbps?: string;
    memoryAveragePercent?: number;
    memoryMaxPercent?: number;
    networkThroughputAverageKbps?: string;
    networkThroughputMaxKbps?: string;
}
