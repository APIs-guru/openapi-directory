import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionStatusSbsEnum } from "./transactionstatussbsenum";


export class SigningBasketStatusResponse200 extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactionStatus" })
  transactionStatus: TransactionStatusSbsEnum;
}
