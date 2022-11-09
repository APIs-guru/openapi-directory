import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointPolicy } from "./endpointpolicy";


// ListEndpointPoliciesResponse
/** 
 * Response returned by the ListEndpointPolicies method.
**/
export class ListEndpointPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpointPolicies", elemType: shared.EndpointPolicy })
  endpointPolicies?: EndpointPolicy[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
