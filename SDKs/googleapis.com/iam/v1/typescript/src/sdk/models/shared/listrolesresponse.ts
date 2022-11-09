import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Role } from "./role";


// ListRolesResponse
/** 
 * The response containing the roles defined under a resource.
**/
export class ListRolesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=roles", elemType: shared.Role })
  roles?: Role[];
}
