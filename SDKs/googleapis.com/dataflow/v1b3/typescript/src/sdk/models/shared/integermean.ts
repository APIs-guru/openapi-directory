import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SplitInt64 } from "./splitint64";
import { SplitInt64 } from "./splitint64";


// IntegerMean
/** 
 * A representation of an integer mean metric contribution.
**/
export class IntegerMean extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: SplitInt64;

  @Metadata({ data: "json, name=sum" })
  sum?: SplitInt64;
}
