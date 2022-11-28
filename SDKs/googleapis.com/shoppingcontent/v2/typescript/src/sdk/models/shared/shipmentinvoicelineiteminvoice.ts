import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnitInvoice } from "./unitinvoice";



export class ShipmentInvoiceLineItemInvoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentUnitIds" })
  shipmentUnitIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=unitInvoice" })
  unitInvoice?: UnitInvoice;
}
