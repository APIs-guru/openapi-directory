import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LanguageAssignedTargetingOptionDetails
/** 
 * Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
**/
export class LanguageAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}


// LanguageAssignedTargetingOptionDetailsInput
/** 
 * Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
**/
export class LanguageAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
