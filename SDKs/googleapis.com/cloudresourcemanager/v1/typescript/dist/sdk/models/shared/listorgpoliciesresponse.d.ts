import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OrgPolicy } from "./orgpolicy";
/**
 * The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource.
**/
export declare class ListOrgPoliciesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    policies?: OrgPolicy[];
}
