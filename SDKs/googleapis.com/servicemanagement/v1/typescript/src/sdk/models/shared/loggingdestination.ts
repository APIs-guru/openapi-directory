import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoggingDestination
/** 
 * Configuration of a specific logging destination (the producer project or the consumer project).
**/
export class LoggingDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logs" })
  logs?: string[];

  @SpeakeasyMetadata({ data: "json, name=monitoredResource" })
  monitoredResource?: string;
}
