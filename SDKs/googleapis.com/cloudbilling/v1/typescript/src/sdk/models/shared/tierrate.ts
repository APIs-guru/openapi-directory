import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// TierRate
/** 
 * The price rate indicating starting usage and its corresponding price.
**/
export class TierRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=startUsageAmount" })
  startUsageAmount?: number;

  @Metadata({ data: "json, name=unitPrice" })
  unitPrice?: Money;
}
