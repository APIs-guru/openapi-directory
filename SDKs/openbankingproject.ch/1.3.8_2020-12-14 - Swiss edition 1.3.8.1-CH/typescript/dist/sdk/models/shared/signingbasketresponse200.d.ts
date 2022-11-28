import { SpeakeasyBase } from "../../../internal/utils";
import { LinksSigningBasket } from "./linkssigningbasket";
import { TransactionStatusSbsEnum } from "./transactionstatussbsenum";
/**
 * Body of the JSON response for a successful get signing basket request.
 *
 *   * 'payments': payment initiations which shall be authorised through this signing basket.
 *   * 'consents': consent objects which shall be authorised through this signing basket.
 *   * 'transactionStatus': Only the codes RCVD, ACTC, RJCT are used.
 *   * '_links': The ASPSP might integrate hyperlinks to indicate next (authorisation) steps to be taken.
 *
**/
export declare class SigningBasketResponse200 extends SpeakeasyBase {
    links?: LinksSigningBasket;
    consents?: string[];
    payments?: string[];
    transactionStatus: TransactionStatusSbsEnum;
}
