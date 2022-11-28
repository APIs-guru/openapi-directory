import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDestination } from "./bigquerydestination";
import { ConsumptionMeteringConfig } from "./consumptionmeteringconfig";



// ResourceUsageExportConfig
/** 
 * Configuration for exporting cluster resource usages.
**/
export class ResourceUsageExportConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: BigQueryDestination;

  @SpeakeasyMetadata({ data: "json, name=consumptionMeteringConfig" })
  consumptionMeteringConfig?: ConsumptionMeteringConfig;

  @SpeakeasyMetadata({ data: "json, name=enableNetworkEgressMetering" })
  enableNetworkEgressMetering?: boolean;
}
