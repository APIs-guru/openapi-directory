import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowTemplate } from "./workflowtemplate";
/**
 * A response to a request to list workflow templates in a project.
**/
export declare class ListWorkflowTemplatesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    templates?: WorkflowTemplate[];
}
