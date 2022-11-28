import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { CategoryInput } from "./category";



// Categories
/** 
 * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
**/
export class Categories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalCategories", elemType: Category })
  additionalCategories?: Category[];

  @SpeakeasyMetadata({ data: "json, name=primaryCategory" })
  primaryCategory?: Category;
}


// CategoriesInput
/** 
 * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
**/
export class CategoriesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalCategories", elemType: CategoryInput })
  additionalCategories?: CategoryInput[];

  @SpeakeasyMetadata({ data: "json, name=primaryCategory" })
  primaryCategory?: CategoryInput;
}
