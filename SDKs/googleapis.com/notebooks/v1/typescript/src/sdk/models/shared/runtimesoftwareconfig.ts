import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerImage } from "./containerimage";


export enum RuntimeSoftwareConfigPostStartupScriptBehaviorEnum {
    PostStartupScriptBehaviorUnspecified = "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED",
    RunEveryStart = "RUN_EVERY_START",
    DownloadAndRunEveryStart = "DOWNLOAD_AND_RUN_EVERY_START"
}


// RuntimeSoftwareConfig
/** 
 * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
**/
export class RuntimeSoftwareConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customGpuDriverPath" })
  customGpuDriverPath?: string;

  @SpeakeasyMetadata({ data: "json, name=disableTerminal" })
  disableTerminal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableHealthMonitoring" })
  enableHealthMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idleShutdown" })
  idleShutdown?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idleShutdownTimeout" })
  idleShutdownTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=installGpuDriver" })
  installGpuDriver?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kernels", elemType: ContainerImage })
  kernels?: ContainerImage[];

  @SpeakeasyMetadata({ data: "json, name=notebookUpgradeSchedule" })
  notebookUpgradeSchedule?: string;

  @SpeakeasyMetadata({ data: "json, name=postStartupScript" })
  postStartupScript?: string;

  @SpeakeasyMetadata({ data: "json, name=postStartupScriptBehavior" })
  postStartupScriptBehavior?: RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=upgradeable" })
  upgradeable?: boolean;
}


// RuntimeSoftwareConfigInput
/** 
 * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
**/
export class RuntimeSoftwareConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customGpuDriverPath" })
  customGpuDriverPath?: string;

  @SpeakeasyMetadata({ data: "json, name=disableTerminal" })
  disableTerminal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableHealthMonitoring" })
  enableHealthMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idleShutdown" })
  idleShutdown?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idleShutdownTimeout" })
  idleShutdownTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=installGpuDriver" })
  installGpuDriver?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kernels", elemType: ContainerImage })
  kernels?: ContainerImage[];

  @SpeakeasyMetadata({ data: "json, name=notebookUpgradeSchedule" })
  notebookUpgradeSchedule?: string;

  @SpeakeasyMetadata({ data: "json, name=postStartupScript" })
  postStartupScript?: string;

  @SpeakeasyMetadata({ data: "json, name=postStartupScriptBehavior" })
  postStartupScriptBehavior?: RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;
}
