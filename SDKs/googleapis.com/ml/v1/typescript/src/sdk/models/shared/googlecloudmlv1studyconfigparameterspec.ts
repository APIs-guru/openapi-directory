import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec } from "./googlecloudmlv1studyconfigparameterspeccategoricalvaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec } from "./googlecloudmlv1studyconfigparameterspecdiscretevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec } from "./googlecloudmlv1studyconfigparameterspecdoublevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec } from "./googlecloudmlv1studyconfigparameterspecintegervaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentcategoricalvaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentdiscretevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentintvaluespec";


export enum GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum {
    ScaleTypeUnspecified = "SCALE_TYPE_UNSPECIFIED",
    UnitLinearScale = "UNIT_LINEAR_SCALE",
    UnitLogScale = "UNIT_LOG_SCALE",
    UnitReverseLogScale = "UNIT_REVERSE_LOG_SCALE"
}

export enum GoogleCloudMlV1StudyConfigParameterSpecTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED",
    Double = "DOUBLE",
    Integer = "INTEGER",
    Categorical = "CATEGORICAL",
    Discrete = "DISCRETE"
}


// GoogleCloudMlV1StudyConfigParameterSpec
/** 
 * Represents a single parameter to optimize.
**/
export class GoogleCloudMlV1StudyConfigParameterSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoricalValueSpec" })
  categoricalValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec;

  @SpeakeasyMetadata({ data: "json, name=childParameterSpecs", elemType: GoogleCloudMlV1StudyConfigParameterSpec })
  childParameterSpecs?: GoogleCloudMlV1StudyConfigParameterSpec[];

  @SpeakeasyMetadata({ data: "json, name=discreteValueSpec" })
  discreteValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec;

  @SpeakeasyMetadata({ data: "json, name=doubleValueSpec" })
  doubleValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec;

  @SpeakeasyMetadata({ data: "json, name=integerValueSpec" })
  integerValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=parentCategoricalValues" })
  parentCategoricalValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec;

  @SpeakeasyMetadata({ data: "json, name=parentDiscreteValues" })
  parentDiscreteValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec;

  @SpeakeasyMetadata({ data: "json, name=parentIntValues" })
  parentIntValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec;

  @SpeakeasyMetadata({ data: "json, name=scaleType" })
  scaleType?: GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudMlV1StudyConfigParameterSpecTypeEnum;
}
