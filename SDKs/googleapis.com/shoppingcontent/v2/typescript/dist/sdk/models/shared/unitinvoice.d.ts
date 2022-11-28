import { SpeakeasyBase } from "../../../internal/utils";
import { UnitInvoiceAdditionalCharge } from "./unitinvoiceadditionalcharge";
import { Promotion } from "./promotion";
import { Price } from "./price";
import { UnitInvoiceTaxLine } from "./unitinvoicetaxline";
export declare class UnitInvoice extends SpeakeasyBase {
    additionalCharges?: UnitInvoiceAdditionalCharge[];
    promotions?: Promotion[];
    unitPricePretax?: Price;
    unitPriceTaxes?: UnitInvoiceTaxLine[];
}
