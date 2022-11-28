import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListOrgPoliciesRequest
/** 
 * The request sent to the ListOrgPolicies method.
**/
export class ListOrgPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
