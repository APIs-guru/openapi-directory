import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1GcsSource
/** 
 * Google Cloud Storage location for input content. format.
**/
export class GoogleCloudRecommendationengineV1beta1GcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputUris" })
  inputUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=jsonSchema" })
  jsonSchema?: string;
}
