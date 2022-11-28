import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepricingRuleRestrictionBoundary
/** 
 * Definition of a boundary.
**/
export class RepricingRuleRestrictionBoundary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentageDelta" })
  percentageDelta?: number;

  @SpeakeasyMetadata({ data: "json, name=priceDelta" })
  priceDelta?: string;
}
