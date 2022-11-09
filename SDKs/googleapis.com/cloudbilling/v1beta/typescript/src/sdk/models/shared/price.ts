import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EstimationTimePoint } from "./estimationtimepoint";
import { Rate } from "./rate";


// Price
/** 
 * The price of a SKU at a point int time.
**/
export class Price extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectiveTime" })
  effectiveTime?: EstimationTimePoint;

  @Metadata({ data: "json, name=priceType" })
  priceType?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: Rate;
}
