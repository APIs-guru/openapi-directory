import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2betasearchrequestboostspecconditionboostspec";


// GoogleCloudRetailV2betaSearchRequestBoostSpec
/** 
 * Boost specification to boost certain items.
**/
export class GoogleCloudRetailV2betaSearchRequestBoostSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditionBoostSpecs", elemType: shared.GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec })
  conditionBoostSpecs?: GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec[];

  @Metadata({ data: "json, name=skipBoostSpecValidation" })
  skipBoostSpecValidation?: boolean;
}
