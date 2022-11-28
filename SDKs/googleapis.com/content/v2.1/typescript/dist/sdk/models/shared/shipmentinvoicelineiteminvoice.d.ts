import { SpeakeasyBase } from "../../../internal/utils";
import { UnitInvoice } from "./unitinvoice";
export declare class ShipmentInvoiceLineItemInvoice extends SpeakeasyBase {
    lineItemId?: string;
    productId?: string;
    shipmentUnitIds?: string[];
    unitInvoice?: UnitInvoice;
}
