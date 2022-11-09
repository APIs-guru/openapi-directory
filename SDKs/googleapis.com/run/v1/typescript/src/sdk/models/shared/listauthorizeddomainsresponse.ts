import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizedDomain } from "./authorizeddomain";


// ListAuthorizedDomainsResponse
/** 
 * A list of Authorized Domains.
**/
export class ListAuthorizedDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains", elemType: shared.AuthorizedDomain })
  domains?: AuthorizedDomain[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
