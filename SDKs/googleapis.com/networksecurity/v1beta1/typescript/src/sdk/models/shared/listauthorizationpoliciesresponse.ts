import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationPolicy } from "./authorizationpolicy";


// ListAuthorizationPoliciesResponse
/** 
 * Response returned by the ListAuthorizationPolicies method.
**/
export class ListAuthorizationPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationPolicies", elemType: shared.AuthorizationPolicy })
  authorizationPolicies?: AuthorizationPolicy[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
