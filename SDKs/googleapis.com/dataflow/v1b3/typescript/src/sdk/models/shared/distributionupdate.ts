import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SplitInt64 } from "./splitint64";
import { Histogram } from "./histogram";
import { SplitInt64 } from "./splitint64";
import { SplitInt64 } from "./splitint64";
import { SplitInt64 } from "./splitint64";


// DistributionUpdate
/** 
 * A metric value representing a distribution.
**/
export class DistributionUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: SplitInt64;

  @Metadata({ data: "json, name=histogram" })
  histogram?: Histogram;

  @Metadata({ data: "json, name=max" })
  max?: SplitInt64;

  @Metadata({ data: "json, name=min" })
  min?: SplitInt64;

  @Metadata({ data: "json, name=sum" })
  sum?: SplitInt64;

  @Metadata({ data: "json, name=sumOfSquares" })
  sumOfSquares?: number;
}
