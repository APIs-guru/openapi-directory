import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerTlsPolicy } from "./servertlspolicy";



// ListServerTlsPoliciesResponse
/** 
 * Response returned by the ListServerTlsPolicies method.
**/
export class ListServerTlsPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=serverTlsPolicies", elemType: ServerTlsPolicy })
  serverTlsPolicies?: ServerTlsPolicy[];
}
