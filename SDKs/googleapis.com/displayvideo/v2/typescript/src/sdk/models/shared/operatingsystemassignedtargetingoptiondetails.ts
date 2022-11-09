import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OperatingSystemAssignedTargetingOptionDetails
/** 
 * Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
**/
export class OperatingSystemAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=negative" })
  negative?: boolean;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
