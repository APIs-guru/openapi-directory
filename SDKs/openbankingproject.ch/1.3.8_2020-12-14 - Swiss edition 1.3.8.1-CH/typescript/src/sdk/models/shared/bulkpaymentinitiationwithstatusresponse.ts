import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountReference16Ch } from "./accountreference16ch";
import { PaymentInitiationBulkElementJson } from "./paymentinitiationbulkelementjson";
import { TransactionStatusEnum } from "./transactionstatusenum";


// BulkPaymentInitiationWithStatusResponse
/** 
 * Generic JSON response body consistion of the corresponding bulk payment initation JSON body together with an optional transaction status field.
 * 
**/
export class BulkPaymentInitiationWithStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptorTransactionDateTime" })
  acceptorTransactionDateTime?: Date;

  @Metadata({ data: "json, name=batchBookingPreferred" })
  batchBookingPreferred?: boolean;

  @Metadata({ data: "json, name=debtorAccount" })
  debtorAccount: AccountReference16Ch;

  @Metadata({ data: "json, name=paymentInformationId" })
  paymentInformationId?: string;

  @Metadata({ data: "json, name=payments", elemType: shared.PaymentInitiationBulkElementJson })
  payments: PaymentInitiationBulkElementJson[];

  @Metadata({ data: "json, name=requestedExecutionDate" })
  requestedExecutionDate?: Date;

  @Metadata({ data: "json, name=transactionStatus" })
  transactionStatus?: TransactionStatusEnum;
}
