import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnitInvoiceAdditionalCharge } from "./unitinvoiceadditionalcharge";
import { Promotion } from "./promotion";
import { Price } from "./price";
import { UnitInvoiceTaxLine } from "./unitinvoicetaxline";



export class UnitInvoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalCharges", elemType: UnitInvoiceAdditionalCharge })
  additionalCharges?: UnitInvoiceAdditionalCharge[];

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: Promotion })
  promotions?: Promotion[];

  @SpeakeasyMetadata({ data: "json, name=unitPricePretax" })
  unitPricePretax?: Price;

  @SpeakeasyMetadata({ data: "json, name=unitPriceTaxes", elemType: UnitInvoiceTaxLine })
  unitPriceTaxes?: UnitInvoiceTaxLine[];
}
