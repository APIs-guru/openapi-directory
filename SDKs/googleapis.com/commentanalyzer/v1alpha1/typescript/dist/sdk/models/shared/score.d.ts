import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScoreTypeEnum {
    ScoreTypeUnspecified = "SCORE_TYPE_UNSPECIFIED",
    Probability = "PROBABILITY",
    StdDevScore = "STD_DEV_SCORE",
    Percentile = "PERCENTILE",
    Raw = "RAW"
}
/**
 * Analysis scores are described by a value and a ScoreType.
**/
export declare class Score extends SpeakeasyBase {
    type?: ScoreTypeEnum;
    value?: number;
}
