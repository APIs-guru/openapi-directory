import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassificationCategory
/** 
 * Represents a category returned from the text classifier.
**/
export class ClassificationCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
