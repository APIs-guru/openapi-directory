import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudMlV1ParameterSpecScaleTypeEnum {
    None = "NONE",
    UnitLinearScale = "UNIT_LINEAR_SCALE",
    UnitLogScale = "UNIT_LOG_SCALE",
    UnitReverseLogScale = "UNIT_REVERSE_LOG_SCALE"
}

export enum GoogleCloudMlV1ParameterSpecTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED",
    Double = "DOUBLE",
    Integer = "INTEGER",
    Categorical = "CATEGORICAL",
    Discrete = "DISCRETE"
}


// GoogleCloudMlV1ParameterSpec
/** 
 * Represents a single hyperparameter to optimize.
**/
export class GoogleCloudMlV1ParameterSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoricalValues" })
  categoricalValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=discreteValues" })
  discreteValues?: number[];

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=scaleType" })
  scaleType?: GoogleCloudMlV1ParameterSpecScaleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudMlV1ParameterSpecTypeEnum;
}
