import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OperatingSystemTargetingOptionDetails
/** 
 * Represents a targetable operating system. This will be populated in the operating_system_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
**/
export class OperatingSystemTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
