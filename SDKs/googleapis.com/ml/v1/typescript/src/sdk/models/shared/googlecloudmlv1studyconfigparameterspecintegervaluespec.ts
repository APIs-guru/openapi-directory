import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: string;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: string;
}
