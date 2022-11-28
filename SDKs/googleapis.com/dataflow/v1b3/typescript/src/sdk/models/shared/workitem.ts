import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MapTask } from "./maptask";
import { Package } from "./package";
import { SeqMapTask } from "./seqmaptask";
import { ShellTask } from "./shelltask";
import { SourceOperationRequest } from "./sourceoperationrequest";
import { StreamingComputationTask } from "./streamingcomputationtask";
import { StreamingConfigTask } from "./streamingconfigtask";
import { StreamingSetupTask } from "./streamingsetuptask";



// WorkItem
/** 
 * WorkItem represents basic information about a WorkItem to be executed in the cloud.
**/
export class WorkItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=initialReportIndex" })
  initialReportIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=leaseExpireTime" })
  leaseExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=mapTask" })
  mapTask?: MapTask;

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: Package })
  packages?: Package[];

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=reportStatusInterval" })
  reportStatusInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=seqMapTask" })
  seqMapTask?: SeqMapTask;

  @SpeakeasyMetadata({ data: "json, name=shellTask" })
  shellTask?: ShellTask;

  @SpeakeasyMetadata({ data: "json, name=sourceOperationTask" })
  sourceOperationTask?: SourceOperationRequest;

  @SpeakeasyMetadata({ data: "json, name=streamingComputationTask" })
  streamingComputationTask?: StreamingComputationTask;

  @SpeakeasyMetadata({ data: "json, name=streamingConfigTask" })
  streamingConfigTask?: StreamingConfigTask;

  @SpeakeasyMetadata({ data: "json, name=streamingSetupTask" })
  streamingSetupTask?: StreamingSetupTask;
}
