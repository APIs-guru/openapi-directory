import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkerDetails } from "./workerdetails";


// StageExecutionDetails
/** 
 * Information about the workers and work items within a stage.
**/
export class StageExecutionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=workers", elemType: shared.WorkerDetails })
  workers?: WorkerDetails[];
}
