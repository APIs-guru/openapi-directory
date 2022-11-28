import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionStageInfo } from "./jobexecutionstageinfo";



// JobExecutionInfo
/** 
 * Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.
**/
export class JobExecutionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stages", elemType: JobExecutionStageInfo })
  stages?: Map<string, JobExecutionStageInfo>;
}
