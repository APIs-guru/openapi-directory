import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";
import { Histogram } from "./histogram";



// DistributionUpdate
/** 
 * A metric value representing a distribution.
**/
export class DistributionUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: SplitInt64;

  @SpeakeasyMetadata({ data: "json, name=histogram" })
  histogram?: Histogram;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: SplitInt64;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: SplitInt64;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum?: SplitInt64;

  @SpeakeasyMetadata({ data: "json, name=sumOfSquares" })
  sumOfSquares?: number;
}
