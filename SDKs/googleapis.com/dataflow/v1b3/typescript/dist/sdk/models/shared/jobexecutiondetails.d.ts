import { SpeakeasyBase } from "../../../internal/utils";
import { StageSummary } from "./stagesummary";
/**
 * Information about the execution of a job.
**/
export declare class JobExecutionDetails extends SpeakeasyBase {
    nextPageToken?: string;
    stages?: StageSummary[];
}
