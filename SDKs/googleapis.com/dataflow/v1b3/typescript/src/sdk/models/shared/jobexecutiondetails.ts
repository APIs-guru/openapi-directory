import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StageSummary } from "./stagesummary";



// JobExecutionDetails
/** 
 * Information about the execution of a job.
**/
export class JobExecutionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=stages", elemType: StageSummary })
  stages?: StageSummary[];
}
