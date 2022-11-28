import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { Balance } from "./balance";
/**
 * Body of the response for a successful read balance for an account request.
**/
export declare class ReadAccountBalanceResponse200 extends SpeakeasyBase {
    account?: AccountReference16Ch;
    balances: Balance[];
}
