import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { CategoryInput } from "./category";
/**
 * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
**/
export declare class Categories extends SpeakeasyBase {
    additionalCategories?: Category[];
    primaryCategory?: Category;
}
/**
 * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
**/
export declare class CategoriesInput extends SpeakeasyBase {
    additionalCategories?: CategoryInput[];
    primaryCategory?: CategoryInput;
}
