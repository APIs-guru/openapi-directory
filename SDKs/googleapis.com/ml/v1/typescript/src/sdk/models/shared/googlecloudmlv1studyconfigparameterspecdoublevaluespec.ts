import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;
}
