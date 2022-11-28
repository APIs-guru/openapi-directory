import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// RateTier
/** 
 * Pricing details for a service tier.
**/
export class RateTier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Money;

  @SpeakeasyMetadata({ data: "json, name=startAmount" })
  startAmount?: number;
}
