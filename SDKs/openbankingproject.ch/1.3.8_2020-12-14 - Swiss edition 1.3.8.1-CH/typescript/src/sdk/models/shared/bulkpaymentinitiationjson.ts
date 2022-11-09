import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountReference16Ch } from "./accountreference16ch";
import { DebtorAgent7Ch } from "./debtoragent7ch";
import { PaymentInitiationBulkElementJson } from "./paymentinitiationbulkelementjson";


// BulkPaymentInitiationJson
/** 
 * Generic Body for a bulk payment initation via JSON.
 * 
 * paymentInformationId is contained in code but commented since it is n.a.
 * and not all ASPSP are able to support this field now.
 * In a later version the field will be mandatory.
 * 
**/
export class BulkPaymentInitiationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchBookingPreferred" })
  batchBookingPreferred?: boolean;

  @Metadata({ data: "json, name=debtorAccount" })
  debtorAccount: AccountReference16Ch;

  @Metadata({ data: "json, name=debtorAgent" })
  debtorAgent: DebtorAgent7Ch;

  @Metadata({ data: "json, name=payments", elemType: shared.PaymentInitiationBulkElementJson })
  payments: PaymentInitiationBulkElementJson[];

  @Metadata({ data: "json, name=requestedExecutionDate" })
  requestedExecutionDate?: Date;

  @Metadata({ data: "json, name=requestedExecutionTime" })
  requestedExecutionTime?: Date;
}
