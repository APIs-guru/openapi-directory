import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomMetric
/** 
 * A message containing the custom metric.
**/
export class CustomMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
