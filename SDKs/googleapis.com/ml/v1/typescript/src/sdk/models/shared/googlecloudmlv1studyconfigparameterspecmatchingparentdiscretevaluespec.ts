import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec
/** 
 * Represents the spec to match discrete values from parent parameter.
**/
export class GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: number[];
}
