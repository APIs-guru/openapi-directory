import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVisionV1p1beta1WebDetectionWebLabel
/** 
 * Label to provide extra metadata for the web detection.
**/
export class GoogleCloudVisionV1p1beta1WebDetectionWebLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
