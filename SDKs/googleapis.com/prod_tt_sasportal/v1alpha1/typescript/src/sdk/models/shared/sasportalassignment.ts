import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalAssignment
/** 
 * Associates `members` with a `role`.
**/
export class SasPortalAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members?: string[];

  @Metadata({ data: "json, name=role" })
  role?: string;
}
