import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlayerScoreResetResponse
/** 
 * A list of reset leaderboard entry resources.
**/
export class PlayerScoreResetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definitionId" })
  definitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=resetScoreTimeSpans" })
  resetScoreTimeSpans?: string[];
}
