import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing the credit card information you have on file with
 * Linode to make Payments against your Account.
 *
**/
export declare class CreditCard extends SpeakeasyBase {
    cardNumber: string;
    cvv: string;
    expiryMonth: number;
    expiryYear: number;
}
