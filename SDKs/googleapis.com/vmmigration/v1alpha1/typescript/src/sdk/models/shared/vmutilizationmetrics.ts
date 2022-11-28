import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VmUtilizationMetrics
/** 
 * Utilization metrics values for a single VM.
**/
export class VmUtilizationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuAverage" })
  cpuAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=cpuAveragePercent" })
  cpuAveragePercent?: number;

  @SpeakeasyMetadata({ data: "json, name=cpuMax" })
  cpuMax?: number;

  @SpeakeasyMetadata({ data: "json, name=cpuMaxPercent" })
  cpuMaxPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=diskIoRateAverage" })
  diskIoRateAverage?: string;

  @SpeakeasyMetadata({ data: "json, name=diskIoRateAverageKbps" })
  diskIoRateAverageKbps?: string;

  @SpeakeasyMetadata({ data: "json, name=diskIoRateMax" })
  diskIoRateMax?: string;

  @SpeakeasyMetadata({ data: "json, name=diskIoRateMaxKbps" })
  diskIoRateMaxKbps?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryAverage" })
  memoryAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=memoryAveragePercent" })
  memoryAveragePercent?: number;

  @SpeakeasyMetadata({ data: "json, name=memoryMax" })
  memoryMax?: number;

  @SpeakeasyMetadata({ data: "json, name=memoryMaxPercent" })
  memoryMaxPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=networkThroughputAverage" })
  networkThroughputAverage?: string;

  @SpeakeasyMetadata({ data: "json, name=networkThroughputAverageKbps" })
  networkThroughputAverageKbps?: string;

  @SpeakeasyMetadata({ data: "json, name=networkThroughputMax" })
  networkThroughputMax?: string;

  @SpeakeasyMetadata({ data: "json, name=networkThroughputMaxKbps" })
  networkThroughputMaxKbps?: string;
}
