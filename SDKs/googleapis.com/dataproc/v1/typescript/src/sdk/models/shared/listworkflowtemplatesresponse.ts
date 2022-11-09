import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkflowTemplate } from "./workflowtemplate";


// ListWorkflowTemplatesResponse
/** 
 * A response to a request to list workflow templates in a project.
**/
export class ListWorkflowTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=templates", elemType: shared.WorkflowTemplate })
  templates?: WorkflowTemplate[];
}
