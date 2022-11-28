import { SpeakeasyBase } from "../../../internal/utils";
import { AlertPolicy } from "./alertpolicy";
/**
 * The protocol for the ListAlertPolicies response.
**/
export declare class ListAlertPoliciesResponse extends SpeakeasyBase {
    alertPolicies?: AlertPolicy[];
    nextPageToken?: string;
    totalSize?: number;
}
