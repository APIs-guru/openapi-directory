import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedDomain } from "./authorizeddomain";



// ListAuthorizedDomainsResponse
/** 
 * A list of Authorized Domains.
**/
export class ListAuthorizedDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: AuthorizedDomain })
  domains?: AuthorizedDomain[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
