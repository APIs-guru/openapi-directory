import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { PaymentInitiationBulkElementJson } from "./paymentinitiationbulkelementjson";
import { TransactionStatusEnum } from "./transactionstatusenum";



// BulkPaymentInitiationWithStatusResponse
/** 
 * Generic JSON response body consistion of the corresponding bulk payment initation JSON body together with an optional transaction status field.
 * 
**/
export class BulkPaymentInitiationWithStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptorTransactionDateTime" })
  acceptorTransactionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=batchBookingPreferred" })
  batchBookingPreferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=debtorAccount" })
  debtorAccount: AccountReference16Ch;

  @SpeakeasyMetadata({ data: "json, name=paymentInformationId" })
  paymentInformationId?: string;

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: PaymentInitiationBulkElementJson })
  payments: PaymentInitiationBulkElementJson[];

  @SpeakeasyMetadata({ data: "json, name=requestedExecutionDate" })
  requestedExecutionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionStatus" })
  transactionStatus?: TransactionStatusEnum;
}
