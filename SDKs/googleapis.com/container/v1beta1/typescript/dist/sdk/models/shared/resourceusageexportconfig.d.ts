import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDestination } from "./bigquerydestination";
import { ConsumptionMeteringConfig } from "./consumptionmeteringconfig";
/**
 * Configuration for exporting cluster resource usages.
**/
export declare class ResourceUsageExportConfig extends SpeakeasyBase {
    bigqueryDestination?: BigQueryDestination;
    consumptionMeteringConfig?: ConsumptionMeteringConfig;
    enableNetworkEgressMetering?: boolean;
}
