import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StageSummary } from "./stagesummary";


// JobExecutionDetails
/** 
 * Information about the execution of a job.
**/
export class JobExecutionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=stages", elemType: shared.StageSummary })
  stages?: StageSummary[];
}
