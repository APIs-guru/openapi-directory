import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;
}
