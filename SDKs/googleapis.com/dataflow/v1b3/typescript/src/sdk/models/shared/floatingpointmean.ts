import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SplitInt64 } from "./splitint64";


// FloatingPointMean
/** 
 * A representation of a floating point mean metric contribution.
**/
export class FloatingPointMean extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: SplitInt64;

  @Metadata({ data: "json, name=sum" })
  sum?: number;
}
