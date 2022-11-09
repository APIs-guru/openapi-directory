import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LatencyCriteria } from "./latencycriteria";


// BasicSli
/** 
 * An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service.
**/
export class BasicSli extends SpeakeasyBase {
  @Metadata({ data: "json, name=availability" })
  availability?: Map<string, any>;

  @Metadata({ data: "json, name=latency" })
  latency?: LatencyCriteria;

  @Metadata({ data: "json, name=location" })
  location?: string[];

  @Metadata({ data: "json, name=method" })
  method?: string[];

  @Metadata({ data: "json, name=version" })
  version?: string[];
}
