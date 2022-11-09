import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceMakeModelAssignedTargetingOptionDetails
/** 
 * Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
**/
export class DeviceMakeModelAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=negative" })
  negative?: boolean;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
