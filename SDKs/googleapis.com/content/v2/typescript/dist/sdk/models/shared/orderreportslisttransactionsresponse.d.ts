import { SpeakeasyBase } from "../../../internal/utils";
import { OrderReportTransaction } from "./orderreporttransaction";
export declare class OrderreportsListTransactionsResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    transactions?: OrderReportTransaction[];
}
