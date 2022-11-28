import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale } from "./googledevtoolsremotebuildexecutionadminv1alphaautoscale";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerconfig";
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Inactive = "INACTIVE"
}
/**
 * A worker pool resource in the Remote Build Execution API.
**/
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool extends SpeakeasyBase {
    autoscale?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale;
    channel?: string;
    hostOs?: string;
    name?: string;
    state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum;
    workerConfig?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;
    workerCount?: string;
}
