import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageMetrics } from "./usagemetrics";



// RuntimeInfo
/** 
 * Runtime information about workload execution.
**/
export class RuntimeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approximateUsage" })
  approximateUsage?: UsageMetrics;

  @SpeakeasyMetadata({ data: "json, name=diagnosticOutputUri" })
  diagnosticOutputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoints" })
  endpoints?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=outputUri" })
  outputUri?: string;
}


// RuntimeInfoInput
/** 
 * Runtime information about workload execution.
**/
export class RuntimeInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approximateUsage" })
  approximateUsage?: UsageMetrics;
}
