import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationPolicy } from "./authorizationpolicy";



// ListAuthorizationPoliciesResponse
/** 
 * Response returned by the ListAuthorizationPolicies method.
**/
export class ListAuthorizationPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationPolicies", elemType: AuthorizationPolicy })
  authorizationPolicies?: AuthorizationPolicy[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
