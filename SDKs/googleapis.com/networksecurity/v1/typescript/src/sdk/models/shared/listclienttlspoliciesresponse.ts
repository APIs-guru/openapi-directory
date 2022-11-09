import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientTlsPolicy } from "./clienttlspolicy";


// ListClientTlsPoliciesResponse
/** 
 * Response returned by the ListClientTlsPolicies method.
**/
export class ListClientTlsPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientTlsPolicies", elemType: shared.ClientTlsPolicy })
  clientTlsPolicies?: ClientTlsPolicy[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
