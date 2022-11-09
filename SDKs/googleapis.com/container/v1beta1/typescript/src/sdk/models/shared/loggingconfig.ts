import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingComponentConfig } from "./loggingcomponentconfig";


// LoggingConfig
/** 
 * LoggingConfig is cluster logging configuration.
**/
export class LoggingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentConfig" })
  componentConfig?: LoggingComponentConfig;
}
