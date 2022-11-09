import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlayerScoreResetResponse
/** 
 * A list of reset leaderboard entry resources.
**/
export class PlayerScoreResetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=definitionId" })
  definitionId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=resetScoreTimeSpans" })
  resetScoreTimeSpans?: string[];
}
