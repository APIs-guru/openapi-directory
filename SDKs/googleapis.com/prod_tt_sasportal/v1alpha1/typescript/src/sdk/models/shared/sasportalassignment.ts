import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalAssignment
/** 
 * Associates `members` with a `role`.
**/
export class SasPortalAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string[];

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
