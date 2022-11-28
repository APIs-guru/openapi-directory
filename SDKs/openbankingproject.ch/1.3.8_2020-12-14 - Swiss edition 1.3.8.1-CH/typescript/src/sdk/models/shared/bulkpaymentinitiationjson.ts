import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=batchBookingPreferred" })
  batchBookingPreferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=debtorAccount" })
  debtorAccount: AccountReference16Ch;

  @SpeakeasyMetadata({ data: "json, name=debtorAgent" })
  debtorAgent: DebtorAgent7Ch;

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: PaymentInitiationBulkElementJson })
  payments: PaymentInitiationBulkElementJson[];

  @SpeakeasyMetadata({ data: "json, name=requestedExecutionDate" })
  requestedExecutionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=requestedExecutionTime" })
  requestedExecutionTime?: Date;
}
