import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FixedBidStrategy
/** 
 * A strategy that uses a fixed bidding price.
**/
export class FixedBidStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidAmountMicros" })
  bidAmountMicros?: string;
}
