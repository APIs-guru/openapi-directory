import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CategoryTargetingOptionDetails
/** 
 * Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`.
**/
export class CategoryTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
