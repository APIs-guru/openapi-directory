import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TaxSettingsResponseTaxationModeEnum {
    Exclusive = "EXCLUSIVE"
,    Inclusive = "INCLUSIVE"
}

export enum TaxSettingsResponseTaxationTypeEnum {
    None = "NONE"
,    SalesTax = "SALES_TAX"
,    Vat = "VAT"
}


export class TaxSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=organizationUuid" })
  organizationUuid?: string;

  @Metadata({ data: "json, name=taxationMode" })
  taxationMode?: TaxSettingsResponseTaxationModeEnum;

  @Metadata({ data: "json, name=taxationType" })
  taxationType?: TaxSettingsResponseTaxationTypeEnum;
}
