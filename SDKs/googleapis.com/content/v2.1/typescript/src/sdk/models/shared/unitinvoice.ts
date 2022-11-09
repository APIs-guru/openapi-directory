import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UnitInvoiceAdditionalCharge } from "./unitinvoiceadditionalcharge";
import { Price } from "./price";
import { UnitInvoiceTaxLine } from "./unitinvoicetaxline";


export class UnitInvoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalCharges", elemType: shared.UnitInvoiceAdditionalCharge })
  additionalCharges?: UnitInvoiceAdditionalCharge[];

  @Metadata({ data: "json, name=unitPrice" })
  unitPrice?: Price;

  @Metadata({ data: "json, name=unitPriceTaxes", elemType: shared.UnitInvoiceTaxLine })
  unitPriceTaxes?: UnitInvoiceTaxLine[];
}
