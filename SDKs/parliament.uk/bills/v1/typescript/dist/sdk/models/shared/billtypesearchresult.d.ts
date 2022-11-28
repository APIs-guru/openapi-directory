import { SpeakeasyBase } from "../../../internal/utils";
import { BillType } from "./billtype";
export declare class BillTypeSearchResult extends SpeakeasyBase {
    items?: BillType[];
    itemsPerPage?: number;
    totalResults?: number;
}
