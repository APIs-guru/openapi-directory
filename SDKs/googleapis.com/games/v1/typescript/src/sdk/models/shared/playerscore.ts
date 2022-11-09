import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerScoreTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED"
,    AllTime = "ALL_TIME"
,    Weekly = "WEEKLY"
,    Daily = "DAILY"
}


// PlayerScore
/** 
 * A player score.
**/
export class PlayerScore extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedScore" })
  formattedScore?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=score" })
  score?: string;

  @Metadata({ data: "json, name=scoreTag" })
  scoreTag?: string;

  @Metadata({ data: "json, name=timeSpan" })
  timeSpan?: PlayerScoreTimeSpanEnum;
}
