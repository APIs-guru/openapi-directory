import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
export declare class ListBusinessCategoriesResponse extends SpeakeasyBase {
    categories?: Category[];
    nextPageToken?: string;
    totalCategoryCount?: number;
}
