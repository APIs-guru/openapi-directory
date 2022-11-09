import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";


// BatchGetCategoriesResponse
/** 
 * Response message for BusinessCategories.BatchGetBusinessCategories.
**/
export class BatchGetCategoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories?: Category[];
}
