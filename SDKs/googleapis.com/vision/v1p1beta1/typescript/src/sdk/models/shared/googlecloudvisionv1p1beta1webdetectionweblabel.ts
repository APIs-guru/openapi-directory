import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1WebDetectionWebLabel
/** 
 * Label to provide extra metadata for the web detection.
**/
export class GoogleCloudVisionV1p1beta1WebDetectionWebLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
