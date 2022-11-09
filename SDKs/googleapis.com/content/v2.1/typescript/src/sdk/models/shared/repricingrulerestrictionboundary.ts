import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepricingRuleRestrictionBoundary
/** 
 * Definition of a boundary.
**/
export class RepricingRuleRestrictionBoundary extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentageDelta" })
  percentageDelta?: number;

  @Metadata({ data: "json, name=priceDelta" })
  priceDelta?: string;
}
