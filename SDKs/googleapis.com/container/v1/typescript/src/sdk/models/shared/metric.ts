import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metric
/** 
 * Progress metric is (string, int|float|string) pair.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
