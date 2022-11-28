import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { DebtorAgent7Ch } from "./debtoragent7ch";
import { PaymentInitiationBulkElementJson } from "./paymentinitiationbulkelementjson";
/**
 * Generic Body for a bulk payment initation via JSON.
 *
 * paymentInformationId is contained in code but commented since it is n.a.
 * and not all ASPSP are able to support this field now.
 * In a later version the field will be mandatory.
 *
**/
export declare class BulkPaymentInitiationJson extends SpeakeasyBase {
    batchBookingPreferred?: boolean;
    debtorAccount: AccountReference16Ch;
    debtorAgent: DebtorAgent7Ch;
    payments: PaymentInitiationBulkElementJson[];
    requestedExecutionDate?: Date;
    requestedExecutionTime?: Date;
}
