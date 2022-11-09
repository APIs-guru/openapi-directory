import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigQueryDestination } from "./bigquerydestination";
import { ConsumptionMeteringConfig } from "./consumptionmeteringconfig";


// ResourceUsageExportConfig
/** 
 * Configuration for exporting cluster resource usages.
**/
export class ResourceUsageExportConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: BigQueryDestination;

  @Metadata({ data: "json, name=consumptionMeteringConfig" })
  consumptionMeteringConfig?: ConsumptionMeteringConfig;

  @Metadata({ data: "json, name=enableNetworkEgressMetering" })
  enableNetworkEgressMetering?: boolean;
}
