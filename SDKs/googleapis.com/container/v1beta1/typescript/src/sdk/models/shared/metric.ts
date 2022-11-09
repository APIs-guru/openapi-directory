import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Metric
/** 
 * Progress metric is (string, int|float|string) pair.
**/
export class Metric extends SpeakeasyBase {
  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
