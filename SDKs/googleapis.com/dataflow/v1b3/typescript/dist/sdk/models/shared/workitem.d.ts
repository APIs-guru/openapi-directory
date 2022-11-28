import { SpeakeasyBase } from "../../../internal/utils";
import { MapTask } from "./maptask";
import { Package } from "./package";
import { SeqMapTask } from "./seqmaptask";
import { ShellTask } from "./shelltask";
import { SourceOperationRequest } from "./sourceoperationrequest";
import { StreamingComputationTask } from "./streamingcomputationtask";
import { StreamingConfigTask } from "./streamingconfigtask";
import { StreamingSetupTask } from "./streamingsetuptask";
/**
 * WorkItem represents basic information about a WorkItem to be executed in the cloud.
**/
export declare class WorkItem extends SpeakeasyBase {
    configuration?: string;
    id?: string;
    initialReportIndex?: string;
    jobId?: string;
    leaseExpireTime?: string;
    mapTask?: MapTask;
    packages?: Package[];
    projectId?: string;
    reportStatusInterval?: string;
    seqMapTask?: SeqMapTask;
    shellTask?: ShellTask;
    sourceOperationTask?: SourceOperationRequest;
    streamingComputationTask?: StreamingComputationTask;
    streamingConfigTask?: StreamingConfigTask;
    streamingSetupTask?: StreamingSetupTask;
}
