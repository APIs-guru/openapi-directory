import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2betasearchrequestboostspecconditionboostspec";



// GoogleCloudRetailV2betaSearchRequestBoostSpec
/** 
 * Boost specification to boost certain items.
**/
export class GoogleCloudRetailV2betaSearchRequestBoostSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditionBoostSpecs", elemType: GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec })
  conditionBoostSpecs?: GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec[];

  @SpeakeasyMetadata({ data: "json, name=skipBoostSpecValidation" })
  skipBoostSpecValidation?: boolean;
}
