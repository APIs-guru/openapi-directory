import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale } from "./googledevtoolsremotebuildexecutionadminv1alphaautoscale";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerconfig";


export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Inactive = "INACTIVE"
}


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool
/** 
 * A worker pool resource in the Remote Build Execution API.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoscale" })
  autoscale?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=hostOs" })
  hostOs?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum;

  @SpeakeasyMetadata({ data: "json, name=workerConfig" })
  workerConfig?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;

  @SpeakeasyMetadata({ data: "json, name=workerCount" })
  workerCount?: string;
}
