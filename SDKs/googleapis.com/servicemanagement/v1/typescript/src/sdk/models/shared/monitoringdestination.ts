import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonitoringDestination
/** 
 * Configuration of a specific monitoring destination (the producer project or the consumer project).
**/
export class MonitoringDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics" })
  metrics?: string[];

  @Metadata({ data: "json, name=monitoredResource" })
  monitoredResource?: string;
}
