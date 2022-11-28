import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceMakeModelTargetingOptionDetails
/** 
 * Represents a targetable device make and model. This will be populated in the device_make_model_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
**/
export class DeviceMakeModelTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
