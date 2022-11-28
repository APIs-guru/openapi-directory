import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UptimeCheckConfig } from "./uptimecheckconfig";



// ListUptimeCheckConfigsResponse
/** 
 * The protocol for the ListUptimeCheckConfigs response.
**/
export class ListUptimeCheckConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;

  @SpeakeasyMetadata({ data: "json, name=uptimeCheckConfigs", elemType: UptimeCheckConfig })
  uptimeCheckConfigs?: UptimeCheckConfig[];
}
