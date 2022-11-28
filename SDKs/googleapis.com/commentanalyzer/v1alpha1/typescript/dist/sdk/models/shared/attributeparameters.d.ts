import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AttributeParametersScoreTypeEnum {
    ScoreTypeUnspecified = "SCORE_TYPE_UNSPECIFIED",
    Probability = "PROBABILITY",
    StdDevScore = "STD_DEV_SCORE",
    Percentile = "PERCENTILE",
    Raw = "RAW"
}
/**
 * Configurable parameters for attribute scoring.
**/
export declare class AttributeParameters extends SpeakeasyBase {
    scoreThreshold?: number;
    scoreType?: AttributeParametersScoreTypeEnum;
}
