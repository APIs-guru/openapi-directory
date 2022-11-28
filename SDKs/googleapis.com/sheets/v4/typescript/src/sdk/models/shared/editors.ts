import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Editors
/** 
 * The editors of a protected range.
**/
export class Editors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainUsersCanEdit" })
  domainUsersCanEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: string[];

  @SpeakeasyMetadata({ data: "json, name=users" })
  users?: string[];
}
