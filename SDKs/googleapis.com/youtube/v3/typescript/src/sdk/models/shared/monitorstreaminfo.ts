import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MonitorStreamInfo
/** 
 * Settings and Info of the monitor stream
**/
export class MonitorStreamInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=broadcastStreamDelayMs" })
  broadcastStreamDelayMs?: number;

  @SpeakeasyMetadata({ data: "json, name=embedHtml" })
  embedHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=enableMonitorStream" })
  enableMonitorStream?: boolean;
}
