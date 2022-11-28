import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
export declare class ListInvoicesResponse extends SpeakeasyBase {
    invoices?: Invoice[];
    nextPageToken?: string;
}
