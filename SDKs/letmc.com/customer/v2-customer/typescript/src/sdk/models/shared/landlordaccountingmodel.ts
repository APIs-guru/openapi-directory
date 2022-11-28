import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandlordAccountingEntryModel } from "./landlordaccountingentrymodel";
import { LandlordAccountingInvoiceModel } from "./landlordaccountinginvoicemodel";



// LandlordAccountingModel
/** 
 * Landlord Accounting
**/
export class LandlordAccountingModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountBalance" })
  accountBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=LastPayment" })
  lastPayment?: Date;

  @SpeakeasyMetadata({ data: "json, name=PaymentHistory", elemType: LandlordAccountingEntryModel })
  paymentHistory?: LandlordAccountingEntryModel[];

  @SpeakeasyMetadata({ data: "json, name=Statements", elemType: LandlordAccountingInvoiceModel })
  statements?: LandlordAccountingInvoiceModel[];
}
