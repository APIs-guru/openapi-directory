import { SpeakeasyBase } from "../../../internal/utils";
import { Workflow } from "./workflow";
/**
 * Response for the ListWorkflows method.
**/
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    unreachable?: string[];
    workflows?: Workflow[];
}
