import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";



// DataprocMetricConfig
/** 
 * Dataproc metric config.
**/
export class DataprocMetricConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];
}
