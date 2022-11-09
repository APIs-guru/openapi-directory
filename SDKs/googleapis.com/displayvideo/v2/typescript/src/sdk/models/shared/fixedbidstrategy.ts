import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FixedBidStrategy
/** 
 * A strategy that uses a fixed bidding price.
**/
export class FixedBidStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidAmountMicros" })
  bidAmountMicros?: string;
}
