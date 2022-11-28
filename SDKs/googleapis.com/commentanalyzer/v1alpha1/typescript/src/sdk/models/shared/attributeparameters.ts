import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AttributeParametersScoreTypeEnum {
    ScoreTypeUnspecified = "SCORE_TYPE_UNSPECIFIED",
    Probability = "PROBABILITY",
    StdDevScore = "STD_DEV_SCORE",
    Percentile = "PERCENTILE",
    Raw = "RAW"
}


// AttributeParameters
/** 
 * Configurable parameters for attribute scoring.
**/
export class AttributeParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scoreThreshold" })
  scoreThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=scoreType" })
  scoreType?: AttributeParametersScoreTypeEnum;
}
