import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
/**
 * Response message for BusinessCategories.ListCategories.
**/
export declare class ListCategoriesResponse extends SpeakeasyBase {
    categories?: Category[];
    nextPageToken?: string;
}
