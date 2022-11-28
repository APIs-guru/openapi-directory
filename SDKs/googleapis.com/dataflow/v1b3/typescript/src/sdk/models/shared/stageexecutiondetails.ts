import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerDetails } from "./workerdetails";



// StageExecutionDetails
/** 
 * Information about the workers and work items within a stage.
**/
export class StageExecutionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=workers", elemType: WorkerDetails })
  workers?: WorkerDetails[];
}
