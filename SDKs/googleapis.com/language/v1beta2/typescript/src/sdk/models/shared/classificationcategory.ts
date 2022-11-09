import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClassificationCategory
/** 
 * Represents a category returned from the text classifier.
**/
export class ClassificationCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
