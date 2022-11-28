import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig } from "./googledevtoolsremotebuildexecutionadminv1alphaacceleratorconfig";
/**
 * Defines the configuration to be used for creating workers in the worker pool.
**/
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig extends SpeakeasyBase {
    accelerator?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig;
    diskSizeGb?: string;
    diskType?: string;
    labels?: Map<string, string>;
    machineType?: string;
    maxConcurrentActions?: string;
    minCpuPlatform?: string;
    networkAccess?: string;
    reserved?: boolean;
    soleTenantNodeType?: string;
    vmImage?: string;
}
