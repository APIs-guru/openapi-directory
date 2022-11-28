import { SpeakeasyBase } from "../../../internal/utils";
import { BillSummary } from "./billsummary";
export declare class BillSummarySearchResult extends SpeakeasyBase {
    items?: BillSummary[];
    itemsPerPage?: number;
    totalResults?: number;
}
