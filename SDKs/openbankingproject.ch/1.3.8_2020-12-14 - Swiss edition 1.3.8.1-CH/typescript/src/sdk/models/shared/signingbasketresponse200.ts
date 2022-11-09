import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LinksSigningBasket } from "./linkssigningbasket";
import { TransactionStatusSbsEnum } from "./transactionstatussbsenum";


// SigningBasketResponse200
/** 
 * Body of the JSON response for a successful get signing basket request.
 * 
 *   * 'payments': payment initiations which shall be authorised through this signing basket.
 *   * 'consents': consent objects which shall be authorised through this signing basket.
 *   * 'transactionStatus': Only the codes RCVD, ACTC, RJCT are used.
 *   * '_links': The ASPSP might integrate hyperlinks to indicate next (authorisation) steps to be taken.
 * 
**/
export class SigningBasketResponse200 extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: LinksSigningBasket;

  @Metadata({ data: "json, name=consents" })
  consents?: string[];

  @Metadata({ data: "json, name=payments" })
  payments?: string[];

  @Metadata({ data: "json, name=transactionStatus" })
  transactionStatus: TransactionStatusSbsEnum;
}
