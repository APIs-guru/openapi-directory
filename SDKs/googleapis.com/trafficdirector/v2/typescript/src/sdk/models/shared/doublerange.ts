import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DoubleRange
/** 
 * Specifies the double start and end of the range using half-open interval semantics [start, end).
**/
export class DoubleRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;
}
