import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationMeta } from "./paginationmeta";
import { Bill } from "./bill";
export declare class BillList extends SpeakeasyBase {
    pagination: PaginationMeta;
    results: Bill[];
}
