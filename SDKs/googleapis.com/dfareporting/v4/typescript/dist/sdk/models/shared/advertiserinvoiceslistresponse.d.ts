import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
/**
 * Invoice List Response
**/
export declare class AdvertiserInvoicesListResponse extends SpeakeasyBase {
    invoices?: Invoice[];
    kind?: string;
    nextPageToken?: string;
}
