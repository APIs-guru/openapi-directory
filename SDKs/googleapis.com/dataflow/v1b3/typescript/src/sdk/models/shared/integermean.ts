import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";



// IntegerMean
/** 
 * A representation of an integer mean metric contribution.
**/
export class IntegerMean extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: SplitInt64;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum?: SplitInt64;
}
