import { SpeakeasyBase } from "../../../internal/utils";
import { UptimeCheckConfig } from "./uptimecheckconfig";
/**
 * The protocol for the ListUptimeCheckConfigs response.
**/
export declare class ListUptimeCheckConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    totalSize?: number;
    uptimeCheckConfigs?: UptimeCheckConfig[];
}
