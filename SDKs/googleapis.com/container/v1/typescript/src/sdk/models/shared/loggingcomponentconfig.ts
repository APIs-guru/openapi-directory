import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LoggingComponentConfigEnableComponentsEnum {
    ComponentUnspecified = "COMPONENT_UNSPECIFIED",
    SystemComponents = "SYSTEM_COMPONENTS",
    Workloads = "WORKLOADS",
    Apiserver = "APISERVER",
    Scheduler = "SCHEDULER",
    ControllerManager = "CONTROLLER_MANAGER"
}


// LoggingComponentConfig
/** 
 * LoggingComponentConfig is cluster logging component configuration.
**/
export class LoggingComponentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableComponents" })
  enableComponents?: LoggingComponentConfigEnableComponentsEnum[];
}
