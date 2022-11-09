import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UnitInvoice } from "./unitinvoice";


export class ShipmentInvoiceLineItemInvoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=shipmentUnitIds" })
  shipmentUnitIds?: string[];

  @Metadata({ data: "json, name=unitInvoice" })
  unitInvoice?: UnitInvoice;
}
