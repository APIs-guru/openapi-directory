import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec
/** 
 * Represents the spec to match categorical values from parent parameter.
**/
export class GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
