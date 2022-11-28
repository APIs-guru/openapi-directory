import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class UnitInvoiceTaxLine extends SpeakeasyBase {
    taxAmount?: Price;
    taxName?: string;
    taxType?: string;
}
