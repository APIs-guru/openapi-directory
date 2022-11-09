import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeDecimal } from "./googletypedecimal";


// GoogleCloudChannelV1PercentageAdjustment
/** 
 * An adjustment that applies a flat markup or markdown to an entire bill.
**/
export class GoogleCloudChannelV1PercentageAdjustment extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentage" })
  percentage?: GoogleTypeDecimal;
}
