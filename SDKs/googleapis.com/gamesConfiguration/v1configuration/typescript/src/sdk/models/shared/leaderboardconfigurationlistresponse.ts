import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardConfiguration } from "./leaderboardconfiguration";



// LeaderboardConfigurationListResponse
/** 
 * A ListConfigurations response.
**/
export class LeaderboardConfigurationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: LeaderboardConfiguration })
  items?: LeaderboardConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
