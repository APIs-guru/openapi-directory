import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeywordAssignedTargetingOptionDetails
/** 
 * Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.
**/
export class KeywordAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;
}
