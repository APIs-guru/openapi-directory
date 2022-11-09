import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobExecutionStageInfo } from "./jobexecutionstageinfo";


// JobExecutionInfo
/** 
 * Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.
**/
export class JobExecutionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=stages", elemType: shared.JobExecutionStageInfo })
  stages?: Map<string, JobExecutionStageInfo>;
}
