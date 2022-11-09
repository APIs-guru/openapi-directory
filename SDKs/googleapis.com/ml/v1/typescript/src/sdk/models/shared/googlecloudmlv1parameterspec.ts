import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudMlV1ParameterSpecScaleTypeEnum {
    None = "NONE"
,    UnitLinearScale = "UNIT_LINEAR_SCALE"
,    UnitLogScale = "UNIT_LOG_SCALE"
,    UnitReverseLogScale = "UNIT_REVERSE_LOG_SCALE"
}

export enum GoogleCloudMlV1ParameterSpecTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED"
,    Double = "DOUBLE"
,    Integer = "INTEGER"
,    Categorical = "CATEGORICAL"
,    Discrete = "DISCRETE"
}


// GoogleCloudMlV1ParameterSpec
/** 
 * Represents a single hyperparameter to optimize.
**/
export class GoogleCloudMlV1ParameterSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoricalValues" })
  categoricalValues?: string[];

  @Metadata({ data: "json, name=discreteValues" })
  discreteValues?: number[];

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;

  @Metadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @Metadata({ data: "json, name=scaleType" })
  scaleType?: GoogleCloudMlV1ParameterSpecScaleTypeEnum;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudMlV1ParameterSpecTypeEnum;
}
