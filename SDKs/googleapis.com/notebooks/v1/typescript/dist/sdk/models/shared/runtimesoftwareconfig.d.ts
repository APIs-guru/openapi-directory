import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerImage } from "./containerimage";
export declare enum RuntimeSoftwareConfigPostStartupScriptBehaviorEnum {
    PostStartupScriptBehaviorUnspecified = "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED",
    RunEveryStart = "RUN_EVERY_START",
    DownloadAndRunEveryStart = "DOWNLOAD_AND_RUN_EVERY_START"
}
/**
 * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
**/
export declare class RuntimeSoftwareConfig extends SpeakeasyBase {
    customGpuDriverPath?: string;
    disableTerminal?: boolean;
    enableHealthMonitoring?: boolean;
    idleShutdown?: boolean;
    idleShutdownTimeout?: number;
    installGpuDriver?: boolean;
    kernels?: ContainerImage[];
    notebookUpgradeSchedule?: string;
    postStartupScript?: string;
    postStartupScriptBehavior?: RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;
    upgradeable?: boolean;
}
/**
 * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
**/
export declare class RuntimeSoftwareConfigInput extends SpeakeasyBase {
    customGpuDriverPath?: string;
    disableTerminal?: boolean;
    enableHealthMonitoring?: boolean;
    idleShutdown?: boolean;
    idleShutdownTimeout?: number;
    installGpuDriver?: boolean;
    kernels?: ContainerImage[];
    notebookUpgradeSchedule?: string;
    postStartupScript?: string;
    postStartupScriptBehavior?: RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;
}
