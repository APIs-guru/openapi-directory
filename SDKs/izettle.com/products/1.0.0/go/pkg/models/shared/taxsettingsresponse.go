package shared




type TaxSettingsResponseTaxationModeEnum string

const (
    TaxSettingsResponseTaxationModeEnumExclusive TaxSettingsResponseTaxationModeEnum = "EXCLUSIVE"
TaxSettingsResponseTaxationModeEnumInclusive TaxSettingsResponseTaxationModeEnum = "INCLUSIVE"
)



type TaxSettingsResponseTaxationTypeEnum string

const (
    TaxSettingsResponseTaxationTypeEnumNone TaxSettingsResponseTaxationTypeEnum = "NONE"
TaxSettingsResponseTaxationTypeEnumSalesTax TaxSettingsResponseTaxationTypeEnum = "SALES_TAX"
TaxSettingsResponseTaxationTypeEnumVat TaxSettingsResponseTaxationTypeEnum = "VAT"
)


type TaxSettingsResponse struct {
    OrganizationUUID *string `json:"organizationUuid,omitempty"`
    TaxationMode *TaxSettingsResponseTaxationModeEnum `json:"taxationMode,omitempty"`
    TaxationType *TaxSettingsResponseTaxationTypeEnum `json:"taxationType,omitempty"`
    
}

