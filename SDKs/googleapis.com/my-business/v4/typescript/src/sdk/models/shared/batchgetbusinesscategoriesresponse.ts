import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";



// BatchGetBusinessCategoriesResponse
/** 
 * Response message for BusinessCategories.BatchGetBusinessCategories.
**/
export class BatchGetBusinessCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories?: Category[];
}
