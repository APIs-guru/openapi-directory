import { SpeakeasyBase } from "../../../internal/utils";
import { UnitInvoiceAdditionalCharge } from "./unitinvoiceadditionalcharge";
import { Price } from "./price";
import { UnitInvoiceTaxLine } from "./unitinvoicetaxline";
export declare class UnitInvoice extends SpeakeasyBase {
    additionalCharges?: UnitInvoiceAdditionalCharge[];
    unitPrice?: Price;
    unitPriceTaxes?: UnitInvoiceTaxLine[];
}
