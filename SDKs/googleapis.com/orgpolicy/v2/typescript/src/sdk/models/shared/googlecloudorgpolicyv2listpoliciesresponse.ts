import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2Policy } from "./googlecloudorgpolicyv2policy";



// GoogleCloudOrgpolicyV2ListPoliciesResponse
/** 
 * The response returned from the ListPolicies method. It will be empty if no `Policies` are set on the resource.
**/
export class GoogleCloudOrgpolicyV2ListPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: GoogleCloudOrgpolicyV2Policy })
  policies?: GoogleCloudOrgpolicyV2Policy[];
}
