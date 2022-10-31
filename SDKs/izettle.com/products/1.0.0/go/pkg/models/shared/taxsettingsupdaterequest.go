package shared




type TaxSettingsUpdateRequestTaxationModeEnum string

const (
    TaxSettingsUpdateRequestTaxationModeEnumExclusive TaxSettingsUpdateRequestTaxationModeEnum = "EXCLUSIVE"
TaxSettingsUpdateRequestTaxationModeEnumInclusive TaxSettingsUpdateRequestTaxationModeEnum = "INCLUSIVE"
)


type TaxSettingsUpdateRequest struct {
    TaxationMode TaxSettingsUpdateRequestTaxationModeEnum `json:"taxationMode"`
    
}

