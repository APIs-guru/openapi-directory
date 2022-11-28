import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2alphasearchrequestboostspecconditionboostspec";



// GoogleCloudRetailV2alphaSearchRequestBoostSpec
/** 
 * Boost specification to boost certain items.
**/
export class GoogleCloudRetailV2alphaSearchRequestBoostSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditionBoostSpecs", elemType: GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec })
  conditionBoostSpecs?: GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec[];

  @SpeakeasyMetadata({ data: "json, name=skipBoostSpecValidation" })
  skipBoostSpecValidation?: boolean;
}
