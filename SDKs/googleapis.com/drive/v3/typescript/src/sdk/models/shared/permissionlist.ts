import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";



// PermissionList
/** 
 * A list of permissions for a file.
**/
export class PermissionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: Permission })
  permissions?: Permission[];
}
