import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingComponentConfig } from "./loggingcomponentconfig";



// LoggingConfig
/** 
 * LoggingConfig is cluster logging configuration.
**/
export class LoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentConfig" })
  componentConfig?: LoggingComponentConfig;
}
