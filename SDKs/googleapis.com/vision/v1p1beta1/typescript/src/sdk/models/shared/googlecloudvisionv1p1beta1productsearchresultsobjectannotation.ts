import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation
/** 
 * Prediction for what the object in the bounding box is.
**/
export class GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=mid" })
  mid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
