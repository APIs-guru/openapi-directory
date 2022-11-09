import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudOrgpolicyV2Policy } from "./googlecloudorgpolicyv2policy";


// GoogleCloudOrgpolicyV2ListPoliciesResponse
/** 
 * The response returned from the ListPolicies method. It will be empty if no `Policies` are set on the resource.
**/
export class GoogleCloudOrgpolicyV2ListPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.GoogleCloudOrgpolicyV2Policy })
  policies?: GoogleCloudOrgpolicyV2Policy[];
}
