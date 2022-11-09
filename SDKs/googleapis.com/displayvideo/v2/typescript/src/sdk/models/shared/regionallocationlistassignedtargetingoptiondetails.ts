import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegionalLocationListAssignedTargetingOptionDetails
/** 
 * Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`.
**/
export class RegionalLocationListAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=negative" })
  negative?: boolean;

  @Metadata({ data: "json, name=regionalLocationListId" })
  regionalLocationListId?: string;
}
