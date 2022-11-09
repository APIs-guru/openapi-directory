import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2alphasearchrequestboostspecconditionboostspec";


// GoogleCloudRetailV2alphaSearchRequestBoostSpec
/** 
 * Boost specification to boost certain items.
**/
export class GoogleCloudRetailV2alphaSearchRequestBoostSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditionBoostSpecs", elemType: shared.GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec })
  conditionBoostSpecs?: GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec[];

  @Metadata({ data: "json, name=skipBoostSpecValidation" })
  skipBoostSpecValidation?: boolean;
}
