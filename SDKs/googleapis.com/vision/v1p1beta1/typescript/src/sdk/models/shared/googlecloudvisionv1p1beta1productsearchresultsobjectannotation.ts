import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation
/** 
 * Prediction for what the object in the bounding box is.
**/
export class GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=mid" })
  mid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
