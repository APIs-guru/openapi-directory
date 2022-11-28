import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerAchievement } from "./playerachievement";



// PlayerAchievementListResponse
/** 
 * A list of achievement objects.
**/
export class PlayerAchievementListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PlayerAchievement })
  items?: PlayerAchievement[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
