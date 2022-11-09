import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoggingDestination
/** 
 * Configuration of a specific logging destination (the producer project or the consumer project).
**/
export class LoggingDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=logs" })
  logs?: string[];

  @Metadata({ data: "json, name=monitoredResource" })
  monitoredResource?: string;
}
