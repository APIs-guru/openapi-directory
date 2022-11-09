import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlayerAchievement } from "./playerachievement";


// PlayerAchievementListResponse
/** 
 * A list of achievement objects.
**/
export class PlayerAchievementListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PlayerAchievement })
  items?: PlayerAchievement[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
