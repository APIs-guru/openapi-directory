import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionStageInfo } from "./jobexecutionstageinfo";
/**
 * Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.
**/
export declare class JobExecutionInfo extends SpeakeasyBase {
    stages?: Map<string, JobExecutionStageInfo>;
}
