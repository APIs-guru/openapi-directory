import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec } from "./googlecloudmlv1studyconfigparameterspeccategoricalvaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec } from "./googlecloudmlv1studyconfigparameterspecdiscretevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec } from "./googlecloudmlv1studyconfigparameterspecdoublevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec } from "./googlecloudmlv1studyconfigparameterspecintegervaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentcategoricalvaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentdiscretevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentintvaluespec";
export declare enum GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum {
    ScaleTypeUnspecified = "SCALE_TYPE_UNSPECIFIED",
    UnitLinearScale = "UNIT_LINEAR_SCALE",
    UnitLogScale = "UNIT_LOG_SCALE",
    UnitReverseLogScale = "UNIT_REVERSE_LOG_SCALE"
}
export declare enum GoogleCloudMlV1StudyConfigParameterSpecTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED",
    Double = "DOUBLE",
    Integer = "INTEGER",
    Categorical = "CATEGORICAL",
    Discrete = "DISCRETE"
}
/**
 * Represents a single parameter to optimize.
**/
export declare class GoogleCloudMlV1StudyConfigParameterSpec extends SpeakeasyBase {
    categoricalValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec;
    childParameterSpecs?: GoogleCloudMlV1StudyConfigParameterSpec[];
    discreteValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec;
    doubleValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec;
    integerValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec;
    parameter?: string;
    parentCategoricalValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec;
    parentDiscreteValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec;
    parentIntValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec;
    scaleType?: GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum;
    type?: GoogleCloudMlV1StudyConfigParameterSpecTypeEnum;
}
