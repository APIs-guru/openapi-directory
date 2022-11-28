import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AchievementResetResponse
/** 
 * An achievement reset response.
**/
export class AchievementResetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentState" })
  currentState?: string;

  @SpeakeasyMetadata({ data: "json, name=definitionId" })
  definitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=updateOccurred" })
  updateOccurred?: boolean;
}
