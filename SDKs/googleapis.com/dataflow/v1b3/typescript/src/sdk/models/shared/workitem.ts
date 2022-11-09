import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=configuration" })
  configuration?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initialReportIndex" })
  initialReportIndex?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=leaseExpireTime" })
  leaseExpireTime?: string;

  @Metadata({ data: "json, name=mapTask" })
  mapTask?: MapTask;

  @Metadata({ data: "json, name=packages", elemType: shared.Package })
  packages?: Package[];

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=reportStatusInterval" })
  reportStatusInterval?: string;

  @Metadata({ data: "json, name=seqMapTask" })
  seqMapTask?: SeqMapTask;

  @Metadata({ data: "json, name=shellTask" })
  shellTask?: ShellTask;

  @Metadata({ data: "json, name=sourceOperationTask" })
  sourceOperationTask?: SourceOperationRequest;

  @Metadata({ data: "json, name=streamingComputationTask" })
  streamingComputationTask?: StreamingComputationTask;

  @Metadata({ data: "json, name=streamingConfigTask" })
  streamingConfigTask?: StreamingConfigTask;

  @Metadata({ data: "json, name=streamingSetupTask" })
  streamingSetupTask?: StreamingSetupTask;
}
