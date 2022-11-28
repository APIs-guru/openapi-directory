import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MonitoringComponentConfigEnableComponentsEnum {
    ComponentUnspecified = "COMPONENT_UNSPECIFIED",
    SystemComponents = "SYSTEM_COMPONENTS",
    Apiserver = "APISERVER",
    Scheduler = "SCHEDULER",
    ControllerManager = "CONTROLLER_MANAGER"
}


// MonitoringComponentConfig
/** 
 * MonitoringComponentConfig is cluster monitoring component configuration.
**/
export class MonitoringComponentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableComponents" })
  enableComponents?: MonitoringComponentConfigEnableComponentsEnum[];
}
