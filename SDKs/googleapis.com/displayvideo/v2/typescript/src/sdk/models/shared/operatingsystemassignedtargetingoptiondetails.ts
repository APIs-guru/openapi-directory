import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OperatingSystemAssignedTargetingOptionDetails
/** 
 * Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
**/
export class OperatingSystemAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}


// OperatingSystemAssignedTargetingOptionDetailsInput
/** 
 * Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
**/
export class OperatingSystemAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
