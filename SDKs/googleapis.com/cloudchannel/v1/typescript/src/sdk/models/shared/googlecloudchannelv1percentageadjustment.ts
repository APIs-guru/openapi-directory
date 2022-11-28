import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDecimal } from "./googletypedecimal";



// GoogleCloudChannelV1PercentageAdjustment
/** 
 * An adjustment that applies a flat markup or markdown to an entire bill.
**/
export class GoogleCloudChannelV1PercentageAdjustment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: GoogleTypeDecimal;
}
