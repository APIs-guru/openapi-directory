import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LeaderboardConfiguration } from "./leaderboardconfiguration";


// LeaderboardConfigurationListResponse
/** 
 * A ListConfigurations response.
**/
export class LeaderboardConfigurationListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.LeaderboardConfiguration })
  items?: LeaderboardConfiguration[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
