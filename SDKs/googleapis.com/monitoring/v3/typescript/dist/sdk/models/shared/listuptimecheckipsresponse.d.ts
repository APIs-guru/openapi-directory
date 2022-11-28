import { SpeakeasyBase } from "../../../internal/utils";
import { UptimeCheckIp } from "./uptimecheckip";
/**
 * The protocol for the ListUptimeCheckIps response.
**/
export declare class ListUptimeCheckIpsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    uptimeCheckIps?: UptimeCheckIp[];
}
