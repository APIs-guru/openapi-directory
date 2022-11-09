import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// RateTier
/** 
 * Pricing details for a service tier.
**/
export class RateTier extends SpeakeasyBase {
  @Metadata({ data: "json, name=price" })
  price?: Money;

  @Metadata({ data: "json, name=startAmount" })
  startAmount?: number;
}
