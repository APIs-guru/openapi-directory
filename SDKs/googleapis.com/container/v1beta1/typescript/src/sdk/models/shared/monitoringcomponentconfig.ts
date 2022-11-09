import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MonitoringComponentConfigEnableComponentsEnum {
    ComponentUnspecified = "COMPONENT_UNSPECIFIED"
,    SystemComponents = "SYSTEM_COMPONENTS"
,    Workloads = "WORKLOADS"
,    Apiserver = "APISERVER"
,    Scheduler = "SCHEDULER"
,    ControllerManager = "CONTROLLER_MANAGER"
}


// MonitoringComponentConfig
/** 
 * MonitoringComponentConfig is cluster monitoring component configuration.
**/
export class MonitoringComponentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableComponents" })
  enableComponents?: MonitoringComponentConfigEnableComponentsEnum[];
}
