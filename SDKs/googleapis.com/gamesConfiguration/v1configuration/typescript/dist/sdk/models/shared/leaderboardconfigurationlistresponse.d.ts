import { SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardConfiguration } from "./leaderboardconfiguration";
/**
 * A ListConfigurations response.
**/
export declare class LeaderboardConfigurationListResponse extends SpeakeasyBase {
    items?: LeaderboardConfiguration[];
    kind?: string;
    nextPageToken?: string;
}
