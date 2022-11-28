import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceOsPoliciesCompliance } from "./instanceospoliciescompliance";
/**
 * A response message for listing OS policies compliance data for all Compute Engine VMs in the given location.
**/
export declare class ListInstanceOsPoliciesCompliancesResponse extends SpeakeasyBase {
    instanceOsPoliciesCompliances?: InstanceOsPoliciesCompliance[];
    nextPageToken?: string;
}
