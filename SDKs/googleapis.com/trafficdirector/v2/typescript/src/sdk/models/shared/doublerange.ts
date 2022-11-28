import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoubleRange
/** 
 * Specifies the double start and end of the range using half-open interval semantics [start, end).
**/
export class DoubleRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
