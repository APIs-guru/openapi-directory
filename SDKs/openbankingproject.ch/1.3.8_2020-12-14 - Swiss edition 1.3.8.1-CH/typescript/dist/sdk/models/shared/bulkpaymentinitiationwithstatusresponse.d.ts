import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { PaymentInitiationBulkElementJson } from "./paymentinitiationbulkelementjson";
import { TransactionStatusEnum } from "./transactionstatusenum";
/**
 * Generic JSON response body consistion of the corresponding bulk payment initation JSON body together with an optional transaction status field.
 *
**/
export declare class BulkPaymentInitiationWithStatusResponse extends SpeakeasyBase {
    acceptorTransactionDateTime?: Date;
    batchBookingPreferred?: boolean;
    debtorAccount: AccountReference16Ch;
    paymentInformationId?: string;
    payments: PaymentInitiationBulkElementJson[];
    requestedExecutionDate?: Date;
    transactionStatus?: TransactionStatusEnum;
}
