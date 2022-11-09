import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AchievementUnlockResponse
/** 
 * An achievement unlock response
**/
export class AchievementUnlockResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=newlyUnlocked" })
  newlyUnlocked?: boolean;
}
