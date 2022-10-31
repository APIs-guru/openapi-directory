package shared



type NiResponseJSONBasic struct {
    CountryCode *string `json:"country_code,omitempty"`
    CountryCodeIso3 *string `json:"country_code_iso3,omitempty"`
    CountryName *string `json:"country_name,omitempty"`
    CountryPrefix *string `json:"country_prefix,omitempty"`
    InternationalFormatNumber *string `json:"international_format_number,omitempty"`
    NationalFormatNumber *string `json:"national_format_number,omitempty"`
    RequestID *string `json:"request_id,omitempty"`
    Status *int64 `json:"status,omitempty"`
    StatusMessage *string `json:"status_message,omitempty"`
    
}

