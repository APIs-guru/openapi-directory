import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metric
/** 
 * A specific metric, identified by specifying values for all of the labels of a MetricDescriptor.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
