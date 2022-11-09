import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Editors
/** 
 * The editors of a protected range.
**/
export class Editors extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainUsersCanEdit" })
  domainUsersCanEdit?: boolean;

  @Metadata({ data: "json, name=groups" })
  groups?: string[];

  @Metadata({ data: "json, name=users" })
  users?: string[];
}
