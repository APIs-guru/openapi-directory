import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workflow } from "./workflow";



// ListWorkflowsResponse
/** 
 * Response for the ListWorkflows method.
**/
export class ListWorkflowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];

  @SpeakeasyMetadata({ data: "json, name=workflows", elemType: Workflow })
  workflows?: Workflow[];
}
