import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LanguageAssignedTargetingOptionDetails
/** 
 * Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
**/
export class LanguageAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=negative" })
  negative?: boolean;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
