import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VmUtilizationMetrics
/** 
 * Utilization metrics values for a single VM.
**/
export class VmUtilizationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuAveragePercent" })
  cpuAveragePercent?: number;

  @SpeakeasyMetadata({ data: "json, name=cpuMaxPercent" })
  cpuMaxPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=diskIoRateAverageKbps" })
  diskIoRateAverageKbps?: string;

  @SpeakeasyMetadata({ data: "json, name=diskIoRateMaxKbps" })
  diskIoRateMaxKbps?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryAveragePercent" })
  memoryAveragePercent?: number;

  @SpeakeasyMetadata({ data: "json, name=memoryMaxPercent" })
  memoryMaxPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=networkThroughputAverageKbps" })
  networkThroughputAverageKbps?: string;

  @SpeakeasyMetadata({ data: "json, name=networkThroughputMaxKbps" })
  networkThroughputMaxKbps?: string;
}
