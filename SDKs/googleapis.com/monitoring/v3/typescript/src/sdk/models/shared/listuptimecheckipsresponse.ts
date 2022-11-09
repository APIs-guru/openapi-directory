import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UptimeCheckIp } from "./uptimecheckip";


// ListUptimeCheckIpsResponse
/** 
 * The protocol for the ListUptimeCheckIps response.
**/
export class ListUptimeCheckIpsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=uptimeCheckIps", elemType: shared.UptimeCheckIp })
  uptimeCheckIps?: UptimeCheckIp[];
}
