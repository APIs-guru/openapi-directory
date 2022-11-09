import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metric } from "./metric";


// DataprocMetricConfig
/** 
 * Dataproc metric config.
**/
export class DataprocMetricConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];
}
