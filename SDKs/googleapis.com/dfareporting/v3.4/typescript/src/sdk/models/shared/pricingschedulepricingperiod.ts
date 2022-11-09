import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PricingSchedulePricingPeriod
/** 
 * Pricing Period
**/
export class PricingSchedulePricingPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=pricingComment" })
  pricingComment?: string;

  @Metadata({ data: "json, name=rateOrCostNanos" })
  rateOrCostNanos?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=units" })
  units?: string;
}
