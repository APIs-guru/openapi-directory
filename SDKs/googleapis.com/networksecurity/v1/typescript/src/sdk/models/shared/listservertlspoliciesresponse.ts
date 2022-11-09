import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerTlsPolicy } from "./servertlspolicy";


// ListServerTlsPoliciesResponse
/** 
 * Response returned by the ListServerTlsPolicies method.
**/
export class ListServerTlsPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=serverTlsPolicies", elemType: shared.ServerTlsPolicy })
  serverTlsPolicies?: ServerTlsPolicy[];
}
