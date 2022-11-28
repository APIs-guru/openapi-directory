import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowTemplate } from "./workflowtemplate";



// ListWorkflowTemplatesResponse
/** 
 * A response to a request to list workflow templates in a project.
**/
export class ListWorkflowTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=templates", elemType: WorkflowTemplate })
  templates?: WorkflowTemplate[];
}
