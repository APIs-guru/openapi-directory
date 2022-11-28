import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";



// BatchGetCategoriesResponse
/** 
 * Response message for BusinessCategories.BatchGetBusinessCategories.
**/
export class BatchGetCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories?: Category[];
}
