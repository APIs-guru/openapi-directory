import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricStructuredName
/** 
 * Identifies a metric, by describing the source which generated the metric.
**/
export class MetricStructuredName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string;
}
