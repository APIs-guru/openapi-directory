import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SplitInt64
/** 
 * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
**/
export class SplitInt64 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=highBits" })
  highBits?: number;

  @SpeakeasyMetadata({ data: "json, name=lowBits" })
  lowBits?: number;
}
