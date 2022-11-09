import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1PercentageAdjustment } from "./googlecloudchannelv1percentageadjustment";


// GoogleCloudChannelV1RepricingAdjustment
/** 
 * A type that represents the various adjustments you can apply to a bill.
**/
export class GoogleCloudChannelV1RepricingAdjustment extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentageAdjustment" })
  percentageAdjustment?: GoogleCloudChannelV1PercentageAdjustment;
}
