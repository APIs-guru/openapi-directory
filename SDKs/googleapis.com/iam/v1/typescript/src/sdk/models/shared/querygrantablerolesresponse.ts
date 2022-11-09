import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Role } from "./role";


// QueryGrantableRolesResponse
/** 
 * The grantable role query response.
**/
export class QueryGrantableRolesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=roles", elemType: shared.Role })
  roles?: Role[];
}
