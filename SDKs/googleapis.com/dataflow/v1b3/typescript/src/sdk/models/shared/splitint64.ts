import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SplitInt64
/** 
 * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
**/
export class SplitInt64 extends SpeakeasyBase {
  @Metadata({ data: "json, name=highBits" })
  highBits?: number;

  @Metadata({ data: "json, name=lowBits" })
  lowBits?: number;
}
