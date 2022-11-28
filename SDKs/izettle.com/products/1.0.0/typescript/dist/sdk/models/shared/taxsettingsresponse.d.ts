import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TaxSettingsResponseTaxationModeEnum {
    Exclusive = "EXCLUSIVE",
    Inclusive = "INCLUSIVE"
}
export declare enum TaxSettingsResponseTaxationTypeEnum {
    None = "NONE",
    SalesTax = "SALES_TAX",
    Vat = "VAT"
}
export declare class TaxSettingsResponse extends SpeakeasyBase {
    organizationUuid?: string;
    taxationMode?: TaxSettingsResponseTaxationModeEnum;
    taxationType?: TaxSettingsResponseTaxationTypeEnum;
}
