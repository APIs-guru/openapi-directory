import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionStatusSbsEnum } from "./transactionstatussbsenum";



export class SigningBasketStatusResponse200 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionStatus" })
  transactionStatus: TransactionStatusSbsEnum;
}
