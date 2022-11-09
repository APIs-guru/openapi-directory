import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale } from "./googledevtoolsremotebuildexecutionadminv1alphaautoscale";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerconfig";

export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Running = "RUNNING"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Inactive = "INACTIVE"
}


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool
/** 
 * A worker pool resource in the Remote Build Execution API.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoscale" })
  autoscale?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale;

  @Metadata({ data: "json, name=channel" })
  channel?: string;

  @Metadata({ data: "json, name=hostOs" })
  hostOs?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum;

  @Metadata({ data: "json, name=workerConfig" })
  workerConfig?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;

  @Metadata({ data: "json, name=workerCount" })
  workerCount?: string;
}
