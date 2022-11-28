import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { AccountReference16Ch } from "./accountreference16ch";
import { Balance } from "./balance";
import { AccountReport } from "./accountreport";
/**
 * Body of the JSON response for a successful read transaction list request.
 * This account report contains transactions resulting from the query parameters.
 *
**/
export declare class TransactionsResponse200Json extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    account?: AccountReference16Ch;
    balances?: Balance[];
    transactions?: AccountReport;
}
