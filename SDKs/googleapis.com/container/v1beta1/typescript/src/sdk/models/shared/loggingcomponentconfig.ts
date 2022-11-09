import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LoggingComponentConfigEnableComponentsEnum {
    ComponentUnspecified = "COMPONENT_UNSPECIFIED"
,    SystemComponents = "SYSTEM_COMPONENTS"
,    Workloads = "WORKLOADS"
}


// LoggingComponentConfig
/** 
 * LoggingComponentConfig is cluster logging component configuration.
**/
export class LoggingComponentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableComponents" })
  enableComponents?: LoggingComponentConfigEnableComponentsEnum[];
}
