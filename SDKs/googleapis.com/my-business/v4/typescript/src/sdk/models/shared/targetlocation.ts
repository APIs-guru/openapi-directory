import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TargetLocation
/** 
 * Represents a target location for a pending invitation.
**/
export class TargetLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationAddress" })
  locationAddress?: string;

  @Metadata({ data: "json, name=locationName" })
  locationName?: string;
}
