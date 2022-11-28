import { SpeakeasyBase } from "../../../internal/utils";
import { LatencyCriteria } from "./latencycriteria";
/**
 * An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service.
**/
export declare class BasicSli extends SpeakeasyBase {
    availability?: Map<string, any>;
    latency?: LatencyCriteria;
    location?: string[];
    method?: string[];
    version?: string[];
}
