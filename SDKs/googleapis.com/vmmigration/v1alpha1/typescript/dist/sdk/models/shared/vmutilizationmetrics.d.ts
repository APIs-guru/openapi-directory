import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Utilization metrics values for a single VM.
**/
export declare class VmUtilizationMetrics extends SpeakeasyBase {
    cpuAverage?: number;
    cpuAveragePercent?: number;
    cpuMax?: number;
    cpuMaxPercent?: number;
    diskIoRateAverage?: string;
    diskIoRateAverageKbps?: string;
    diskIoRateMax?: string;
    diskIoRateMaxKbps?: string;
    memoryAverage?: number;
    memoryAveragePercent?: number;
    memoryMax?: number;
    memoryMaxPercent?: number;
    networkThroughputAverage?: string;
    networkThroughputAverageKbps?: string;
    networkThroughputMax?: string;
    networkThroughputMaxKbps?: string;
}
