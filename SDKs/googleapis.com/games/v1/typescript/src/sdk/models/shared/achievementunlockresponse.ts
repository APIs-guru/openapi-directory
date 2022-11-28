import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AchievementUnlockResponse
/** 
 * An achievement unlock response
**/
export class AchievementUnlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=newlyUnlocked" })
  newlyUnlocked?: boolean;
}
