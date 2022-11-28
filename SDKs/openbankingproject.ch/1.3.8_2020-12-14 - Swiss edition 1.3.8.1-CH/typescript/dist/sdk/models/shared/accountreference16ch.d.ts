import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reference to an account by either
 *   * IBAN, of a payment accounts, or
 *   * otherAccountIdentification, for payment accounts if there is no IBAN
 * adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
 *
**/
export declare class AccountReference16Ch extends SpeakeasyBase {
    cashAccountType?: string;
    currency?: string;
    iban?: string;
    otherAccountIdentification?: string;
}
