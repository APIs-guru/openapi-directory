import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerScoreTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}


// PlayerScore
/** 
 * A player score.
**/
export class PlayerScore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedScore" })
  formattedScore?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: string;

  @SpeakeasyMetadata({ data: "json, name=scoreTag" })
  scoreTag?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSpan" })
  timeSpan?: PlayerScoreTimeSpanEnum;
}
