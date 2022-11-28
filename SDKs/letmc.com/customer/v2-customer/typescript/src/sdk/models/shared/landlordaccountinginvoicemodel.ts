import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LandlordAccountingInvoiceModel
/** 
 * Invoices
**/
export class LandlordAccountingInvoiceModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=InvoiceID" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=IsMaintenanceInvoice" })
  isMaintenanceInvoice?: boolean;
}
