import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2searchrequestboostspecconditionboostspec";
/**
 * Boost specification to boost certain items.
**/
export declare class GoogleCloudRetailV2SearchRequestBoostSpec extends SpeakeasyBase {
    conditionBoostSpecs?: GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec[];
    skipBoostSpecValidation?: boolean;
}
