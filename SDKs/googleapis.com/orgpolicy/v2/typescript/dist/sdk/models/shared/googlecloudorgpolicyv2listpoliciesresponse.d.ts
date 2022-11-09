import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudOrgpolicyV2Policy } from "./googlecloudorgpolicyv2policy";
/**
 * The response returned from the ListPolicies method. It will be empty if no `Policies` are set on the resource.
**/
export declare class GoogleCloudOrgpolicyV2ListPoliciesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    policies?: GoogleCloudOrgpolicyV2Policy[];
}
