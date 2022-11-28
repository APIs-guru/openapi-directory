import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TaxSettingsResponseTaxationModeEnum {
    Exclusive = "EXCLUSIVE",
    Inclusive = "INCLUSIVE"
}

export enum TaxSettingsResponseTaxationTypeEnum {
    None = "NONE",
    SalesTax = "SALES_TAX",
    Vat = "VAT"
}


export class TaxSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organizationUuid" })
  organizationUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=taxationMode" })
  taxationMode?: TaxSettingsResponseTaxationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=taxationType" })
  taxationType?: TaxSettingsResponseTaxationTypeEnum;
}
