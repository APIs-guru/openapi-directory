import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientTlsPolicy } from "./clienttlspolicy";



// ListClientTlsPoliciesResponse
/** 
 * Response returned by the ListClientTlsPolicies method.
**/
export class ListClientTlsPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientTlsPolicies", elemType: ClientTlsPolicy })
  clientTlsPolicies?: ClientTlsPolicy[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
