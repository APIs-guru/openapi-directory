import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClassificationCategory } from "./classificationcategory";


// ClassifyTextResponse
/** 
 * The document classification response message.
**/
export class ClassifyTextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.ClassificationCategory })
  categories?: ClassificationCategory[];
}
