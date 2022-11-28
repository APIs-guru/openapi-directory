import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CategoryTargetingOptionDetails
/** 
 * Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`.
**/
export class CategoryTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
