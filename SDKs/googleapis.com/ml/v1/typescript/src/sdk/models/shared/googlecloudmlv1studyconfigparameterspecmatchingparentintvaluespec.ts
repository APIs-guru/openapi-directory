import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec
/** 
 * Represents the spec to match integer values from parent parameter.
**/
export class GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
