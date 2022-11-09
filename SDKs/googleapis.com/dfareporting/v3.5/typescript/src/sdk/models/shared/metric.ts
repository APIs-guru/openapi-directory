import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Metric
/** 
 * Represents a metric.
**/
export class Metric extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
