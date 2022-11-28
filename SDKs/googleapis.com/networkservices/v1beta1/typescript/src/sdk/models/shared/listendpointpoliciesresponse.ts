import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointPolicy } from "./endpointpolicy";



// ListEndpointPoliciesResponse
/** 
 * Response returned by the ListEndpointPolicies method.
**/
export class ListEndpointPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointPolicies", elemType: EndpointPolicy })
  endpointPolicies?: EndpointPolicy[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
