import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";



// QueryGrantableRolesResponse
/** 
 * The grantable role query response.
**/
export class QueryGrantableRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: Role })
  roles?: Role[];
}
