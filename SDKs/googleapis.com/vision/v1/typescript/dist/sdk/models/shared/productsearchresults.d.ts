import { SpeakeasyBase } from "../../../internal/utils";
import { GroupedResult } from "./groupedresult";
import { Result } from "./result";
/**
 * Results for a product search request.
**/
export declare class ProductSearchResults extends SpeakeasyBase {
    indexTime?: string;
    productGroupedResults?: GroupedResult[];
    results?: Result[];
}
