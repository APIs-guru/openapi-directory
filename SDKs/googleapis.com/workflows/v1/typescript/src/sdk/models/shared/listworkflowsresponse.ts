import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Workflow } from "./workflow";


// ListWorkflowsResponse
/** 
 * Response for the ListWorkflows method.
**/
export class ListWorkflowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];

  @Metadata({ data: "json, name=workflows", elemType: shared.Workflow })
  workflows?: Workflow[];
}
