import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScoreTypeEnum {
    ScoreTypeUnspecified = "SCORE_TYPE_UNSPECIFIED",
    Probability = "PROBABILITY",
    StdDevScore = "STD_DEV_SCORE",
    Percentile = "PERCENTILE",
    Raw = "RAW"
}


// Score
/** 
 * Analysis scores are described by a value and a ScoreType.
**/
export class Score extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ScoreTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
