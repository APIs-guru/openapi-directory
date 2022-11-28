import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatencyCriteria } from "./latencycriteria";



// BasicSli
/** 
 * An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service.
**/
export class BasicSli extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: LatencyCriteria;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string[];
}
