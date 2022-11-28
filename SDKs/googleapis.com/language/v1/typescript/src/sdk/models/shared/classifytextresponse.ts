import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationCategory } from "./classificationcategory";



// ClassifyTextResponse
/** 
 * The document classification response message.
**/
export class ClassifyTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: ClassificationCategory })
  categories?: ClassificationCategory[];
}
