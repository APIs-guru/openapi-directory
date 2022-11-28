import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetLocation
/** 
 * Represents a target location for a pending invitation.
**/
export class TargetLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=locationName" })
  locationName?: string;
}
