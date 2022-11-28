import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EstimationTimePoint } from "./estimationtimepoint";
import { Rate } from "./rate";



// Price
/** 
 * The price of a SKU at a point int time.
**/
export class Price extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTime" })
  effectiveTime?: EstimationTimePoint;

  @SpeakeasyMetadata({ data: "json, name=priceType" })
  priceType?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: Rate;
}
