import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectAnnotation
/** 
 * Prediction for what the object in the bounding box is.
**/
export class ObjectAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=mid" })
  mid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
