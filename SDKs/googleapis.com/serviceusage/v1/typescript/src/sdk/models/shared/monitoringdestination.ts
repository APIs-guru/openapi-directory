import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MonitoringDestination
/** 
 * Configuration of a specific monitoring destination (the producer project or the consumer project).
**/
export class MonitoringDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=monitoredResource" })
  monitoredResource?: string;
}
