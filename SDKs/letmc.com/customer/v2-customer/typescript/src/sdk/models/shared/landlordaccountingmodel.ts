import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LandlordAccountingEntryModel } from "./landlordaccountingentrymodel";
import { LandlordAccountingInvoiceModel } from "./landlordaccountinginvoicemodel";


// LandlordAccountingModel
/** 
 * Landlord Accounting
**/
export class LandlordAccountingModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountBalance" })
  accountBalance?: number;

  @Metadata({ data: "json, name=LastPayment" })
  lastPayment?: Date;

  @Metadata({ data: "json, name=PaymentHistory", elemType: shared.LandlordAccountingEntryModel })
  paymentHistory?: LandlordAccountingEntryModel[];

  @Metadata({ data: "json, name=Statements", elemType: shared.LandlordAccountingInvoiceModel })
  statements?: LandlordAccountingInvoiceModel[];
}
