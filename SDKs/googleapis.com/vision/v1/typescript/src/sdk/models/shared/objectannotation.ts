import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectAnnotation
/** 
 * Prediction for what the object in the bounding box is.
**/
export class ObjectAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=mid" })
  mid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
