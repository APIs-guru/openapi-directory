import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordAccountingEntryModel } from "./landlordaccountingentrymodel";
import { LandlordAccountingInvoiceModel } from "./landlordaccountinginvoicemodel";
/**
 * Landlord Accounting
**/
export declare class LandlordAccountingModel extends SpeakeasyBase {
    accountBalance?: number;
    lastPayment?: Date;
    paymentHistory?: LandlordAccountingEntryModel[];
    statements?: LandlordAccountingInvoiceModel[];
}
