import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2searchrequestboostspecconditionboostspec";



// GoogleCloudRetailV2SearchRequestBoostSpec
/** 
 * Boost specification to boost certain items.
**/
export class GoogleCloudRetailV2SearchRequestBoostSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditionBoostSpecs", elemType: GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec })
  conditionBoostSpecs?: GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec[];

  @SpeakeasyMetadata({ data: "json, name=skipBoostSpecValidation" })
  skipBoostSpecValidation?: boolean;
}
