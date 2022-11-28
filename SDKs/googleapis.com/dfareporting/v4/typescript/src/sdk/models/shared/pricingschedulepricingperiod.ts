import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PricingSchedulePricingPeriod
/** 
 * Pricing Period
**/
export class PricingSchedulePricingPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=pricingComment" })
  pricingComment?: string;

  @SpeakeasyMetadata({ data: "json, name=rateOrCostNanos" })
  rateOrCostNanos?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}
