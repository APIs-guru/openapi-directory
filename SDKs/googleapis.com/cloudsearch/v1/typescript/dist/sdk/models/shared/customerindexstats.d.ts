import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { ItemCountByStatus } from "./itemcountbystatus";
/**
 * Aggregation of items by status code as of the specified date.
**/
export declare class CustomerIndexStats extends SpeakeasyBase {
    date?: Date;
    itemCountByStatus?: ItemCountByStatus[];
}
