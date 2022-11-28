import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";



// ListRolesResponse
/** 
 * The response containing the roles defined under a resource.
**/
export class ListRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: Role })
  roles?: Role[];
}
