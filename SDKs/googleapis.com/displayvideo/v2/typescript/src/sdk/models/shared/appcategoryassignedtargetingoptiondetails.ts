import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppCategoryAssignedTargetingOptionDetailsInput
/** 
 * Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
**/
export class AppCategoryAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}


// AppCategoryAssignedTargetingOptionDetails
/** 
 * Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
**/
export class AppCategoryAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
