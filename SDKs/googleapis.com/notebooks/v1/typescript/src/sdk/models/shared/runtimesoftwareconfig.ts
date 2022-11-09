import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerImage } from "./containerimage";

export enum RuntimeSoftwareConfigPostStartupScriptBehaviorEnum {
    PostStartupScriptBehaviorUnspecified = "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED"
,    RunEveryStart = "RUN_EVERY_START"
,    DownloadAndRunEveryStart = "DOWNLOAD_AND_RUN_EVERY_START"
}


// RuntimeSoftwareConfig
/** 
 * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
**/
export class RuntimeSoftwareConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=customGpuDriverPath" })
  customGpuDriverPath?: string;

  @Metadata({ data: "json, name=disableTerminal" })
  disableTerminal?: boolean;

  @Metadata({ data: "json, name=enableHealthMonitoring" })
  enableHealthMonitoring?: boolean;

  @Metadata({ data: "json, name=idleShutdown" })
  idleShutdown?: boolean;

  @Metadata({ data: "json, name=idleShutdownTimeout" })
  idleShutdownTimeout?: number;

  @Metadata({ data: "json, name=installGpuDriver" })
  installGpuDriver?: boolean;

  @Metadata({ data: "json, name=kernels", elemType: shared.ContainerImage })
  kernels?: ContainerImage[];

  @Metadata({ data: "json, name=notebookUpgradeSchedule" })
  notebookUpgradeSchedule?: string;

  @Metadata({ data: "json, name=postStartupScript" })
  postStartupScript?: string;

  @Metadata({ data: "json, name=postStartupScriptBehavior" })
  postStartupScriptBehavior?: RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;

  @Metadata({ data: "json, name=upgradeable" })
  upgradeable?: boolean;
}
