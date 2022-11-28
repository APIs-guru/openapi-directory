import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { Amount } from "./amount";
/**
 * JSON Request body for the "Confirmation of funds service".
 *
 * <table>
 * <tr>
 *   <td>cardNumber</td>
 *   <td>String </td>
 *   <td>Optional</td>
 *   <td>Card Number of the card issued by the PIISP. Should be delivered if available.</td>
 * </tr>
 * <tr>
 *   <td>account</td>
 *   <td> Account Reference</td>
 *   <td>Mandatory</td>
 *   <td>PSU's account number.</td>
 * </tr>
 * <tr>
 *   <td>payee</td>
 *   <td>Max70Text</td>
 *   <td>Optional</td>
 *   <td>The merchant where the card is accepted as an information to the PSU.</td>
 * </tr>
 * <tr>
 *   <td>instructedAmount</td>
 *   <td>Amount</td>
 *   <td>Mandatory</td>
 *   <td>Transaction amount to be checked within the funds check mechanism.</td>
 * </tr>
 * </table>
 *
**/
export declare class ConfirmationOfFunds extends SpeakeasyBase {
    account: AccountReference16Ch;
    cardNumber?: string;
    instructedAmount: Amount;
    payee?: string;
}
