import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AttributeParametersScoreTypeEnum {
    ScoreTypeUnspecified = "SCORE_TYPE_UNSPECIFIED"
,    Probability = "PROBABILITY"
,    StdDevScore = "STD_DEV_SCORE"
,    Percentile = "PERCENTILE"
,    Raw = "RAW"
}


// AttributeParameters
/** 
 * Configurable parameters for attribute scoring.
**/
export class AttributeParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=scoreThreshold" })
  scoreThreshold?: number;

  @Metadata({ data: "json, name=scoreType" })
  scoreType?: AttributeParametersScoreTypeEnum;
}
