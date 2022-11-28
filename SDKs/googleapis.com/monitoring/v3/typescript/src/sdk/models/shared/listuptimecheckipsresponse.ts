import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UptimeCheckIp } from "./uptimecheckip";



// ListUptimeCheckIpsResponse
/** 
 * The protocol for the ListUptimeCheckIps response.
**/
export class ListUptimeCheckIpsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=uptimeCheckIps", elemType: UptimeCheckIp })
  uptimeCheckIps?: UptimeCheckIp[];
}
