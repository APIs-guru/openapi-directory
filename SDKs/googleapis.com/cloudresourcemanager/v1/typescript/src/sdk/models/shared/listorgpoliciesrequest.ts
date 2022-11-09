import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListOrgPoliciesRequest
/** 
 * The request sent to the ListOrgPolicies method.
**/
export class ListOrgPoliciesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
