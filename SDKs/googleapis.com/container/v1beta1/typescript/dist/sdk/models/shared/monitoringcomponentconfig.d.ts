import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MonitoringComponentConfigEnableComponentsEnum {
    ComponentUnspecified = "COMPONENT_UNSPECIFIED",
    SystemComponents = "SYSTEM_COMPONENTS",
    Workloads = "WORKLOADS",
    Apiserver = "APISERVER",
    Scheduler = "SCHEDULER",
    ControllerManager = "CONTROLLER_MANAGER"
}
/**
 * MonitoringComponentConfig is cluster monitoring component configuration.
**/
export declare class MonitoringComponentConfig extends SpeakeasyBase {
    enableComponents?: MonitoringComponentConfigEnableComponentsEnum[];
}
