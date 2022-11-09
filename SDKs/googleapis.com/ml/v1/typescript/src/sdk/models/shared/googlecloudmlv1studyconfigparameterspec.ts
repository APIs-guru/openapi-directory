import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec } from "./googlecloudmlv1studyconfigparameterspeccategoricalvaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpec } from "./googlecloudmlv1studyconfigparameterspec";
import { GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec } from "./googlecloudmlv1studyconfigparameterspecdiscretevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec } from "./googlecloudmlv1studyconfigparameterspecdoublevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec } from "./googlecloudmlv1studyconfigparameterspecintegervaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentcategoricalvaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentdiscretevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentintvaluespec";

export enum GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum {
    ScaleTypeUnspecified = "SCALE_TYPE_UNSPECIFIED"
,    UnitLinearScale = "UNIT_LINEAR_SCALE"
,    UnitLogScale = "UNIT_LOG_SCALE"
,    UnitReverseLogScale = "UNIT_REVERSE_LOG_SCALE"
}

export enum GoogleCloudMlV1StudyConfigParameterSpecTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED"
,    Double = "DOUBLE"
,    Integer = "INTEGER"
,    Categorical = "CATEGORICAL"
,    Discrete = "DISCRETE"
}


// GoogleCloudMlV1StudyConfigParameterSpec
/** 
 * Represents a single parameter to optimize.
**/
export class GoogleCloudMlV1StudyConfigParameterSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoricalValueSpec" })
  categoricalValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec;

  @Metadata({ data: "json, name=childParameterSpecs", elemType: shared.GoogleCloudMlV1StudyConfigParameterSpec })
  childParameterSpecs?: GoogleCloudMlV1StudyConfigParameterSpec[];

  @Metadata({ data: "json, name=discreteValueSpec" })
  discreteValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec;

  @Metadata({ data: "json, name=doubleValueSpec" })
  doubleValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec;

  @Metadata({ data: "json, name=integerValueSpec" })
  integerValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec;

  @Metadata({ data: "json, name=parameter" })
  parameter?: string;

  @Metadata({ data: "json, name=parentCategoricalValues" })
  parentCategoricalValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec;

  @Metadata({ data: "json, name=parentDiscreteValues" })
  parentDiscreteValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec;

  @Metadata({ data: "json, name=parentIntValues" })
  parentIntValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec;

  @Metadata({ data: "json, name=scaleType" })
  scaleType?: GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudMlV1StudyConfigParameterSpecTypeEnum;
}
