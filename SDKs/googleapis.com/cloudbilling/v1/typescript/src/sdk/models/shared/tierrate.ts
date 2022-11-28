import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// TierRate
/** 
 * The price rate indicating starting usage and its corresponding price.
**/
export class TierRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startUsageAmount" })
  startUsageAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: Money;
}
