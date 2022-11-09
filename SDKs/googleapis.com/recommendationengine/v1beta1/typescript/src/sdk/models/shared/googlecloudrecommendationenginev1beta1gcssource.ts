import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommendationengineV1beta1GcsSource
/** 
 * Google Cloud Storage location for input content. format.
**/
export class GoogleCloudRecommendationengineV1beta1GcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputUris" })
  inputUris?: string[];

  @Metadata({ data: "json, name=jsonSchema" })
  jsonSchema?: string;
}
