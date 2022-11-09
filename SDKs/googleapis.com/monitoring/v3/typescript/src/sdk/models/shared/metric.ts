import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Metric
/** 
 * A specific metric, identified by specifying values for all of the labels of a MetricDescriptor.
**/
export class Metric extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
