import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonitorStreamInfo
/** 
 * Settings and Info of the monitor stream
**/
export class MonitorStreamInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=broadcastStreamDelayMs" })
  broadcastStreamDelayMs?: number;

  @Metadata({ data: "json, name=embedHtml" })
  embedHtml?: string;

  @Metadata({ data: "json, name=enableMonitorStream" })
  enableMonitorStream?: boolean;
}
