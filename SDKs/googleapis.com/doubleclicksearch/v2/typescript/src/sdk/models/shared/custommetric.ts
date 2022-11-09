import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomMetric
/** 
 * A message containing the custom metric.
**/
export class CustomMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
