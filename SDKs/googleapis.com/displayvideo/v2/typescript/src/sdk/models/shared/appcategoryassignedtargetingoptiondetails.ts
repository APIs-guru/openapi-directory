import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppCategoryAssignedTargetingOptionDetails
/** 
 * Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
**/
export class AppCategoryAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=negative" })
  negative?: boolean;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
