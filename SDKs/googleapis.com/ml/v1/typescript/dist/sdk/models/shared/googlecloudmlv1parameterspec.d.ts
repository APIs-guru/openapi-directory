import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudMlV1ParameterSpecScaleTypeEnum {
    None = "NONE",
    UnitLinearScale = "UNIT_LINEAR_SCALE",
    UnitLogScale = "UNIT_LOG_SCALE",
    UnitReverseLogScale = "UNIT_REVERSE_LOG_SCALE"
}
export declare enum GoogleCloudMlV1ParameterSpecTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED",
    Double = "DOUBLE",
    Integer = "INTEGER",
    Categorical = "CATEGORICAL",
    Discrete = "DISCRETE"
}
/**
 * Represents a single hyperparameter to optimize.
**/
export declare class GoogleCloudMlV1ParameterSpec extends SpeakeasyBase {
    categoricalValues?: string[];
    discreteValues?: number[];
    maxValue?: number;
    minValue?: number;
    parameterName?: string;
    scaleType?: GoogleCloudMlV1ParameterSpecScaleTypeEnum;
    type?: GoogleCloudMlV1ParameterSpecTypeEnum;
}
