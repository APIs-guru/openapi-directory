import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metric
/** 
 * Represents a metric.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
