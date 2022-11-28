import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnitInvoiceAdditionalCharge } from "./unitinvoiceadditionalcharge";
import { Price } from "./price";
import { UnitInvoiceTaxLine } from "./unitinvoicetaxline";



export class UnitInvoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalCharges", elemType: UnitInvoiceAdditionalCharge })
  additionalCharges?: UnitInvoiceAdditionalCharge[];

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: Price;

  @SpeakeasyMetadata({ data: "json, name=unitPriceTaxes", elemType: UnitInvoiceTaxLine })
  unitPriceTaxes?: UnitInvoiceTaxLine[];
}
