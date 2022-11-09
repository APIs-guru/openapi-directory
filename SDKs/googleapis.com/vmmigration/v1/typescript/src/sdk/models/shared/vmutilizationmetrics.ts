import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VmUtilizationMetrics
/** 
 * Utilization metrics values for a single VM.
**/
export class VmUtilizationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuAveragePercent" })
  cpuAveragePercent?: number;

  @Metadata({ data: "json, name=cpuMaxPercent" })
  cpuMaxPercent?: number;

  @Metadata({ data: "json, name=diskIoRateAverageKbps" })
  diskIoRateAverageKbps?: string;

  @Metadata({ data: "json, name=diskIoRateMaxKbps" })
  diskIoRateMaxKbps?: string;

  @Metadata({ data: "json, name=memoryAveragePercent" })
  memoryAveragePercent?: number;

  @Metadata({ data: "json, name=memoryMaxPercent" })
  memoryMaxPercent?: number;

  @Metadata({ data: "json, name=networkThroughputAverageKbps" })
  networkThroughputAverageKbps?: string;

  @Metadata({ data: "json, name=networkThroughputMaxKbps" })
  networkThroughputMaxKbps?: string;
}
