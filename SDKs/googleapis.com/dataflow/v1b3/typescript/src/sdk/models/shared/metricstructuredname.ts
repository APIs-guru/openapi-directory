import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricStructuredName
/** 
 * Identifies a metric, by describing the source which generated the metric.
**/
export class MetricStructuredName extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=origin" })
  origin?: string;
}
