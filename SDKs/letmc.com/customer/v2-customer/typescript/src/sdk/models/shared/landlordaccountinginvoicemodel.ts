import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LandlordAccountingInvoiceModel
/** 
 * Invoices
**/
export class LandlordAccountingInvoiceModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=InvoiceID" })
  invoiceId?: string;

  @Metadata({ data: "json, name=IsMaintenanceInvoice" })
  isMaintenanceInvoice?: boolean;
}
