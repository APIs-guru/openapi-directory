import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";



// FloatingPointMean
/** 
 * A representation of a floating point mean metric contribution.
**/
export class FloatingPointMean extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: SplitInt64;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum?: number;
}
