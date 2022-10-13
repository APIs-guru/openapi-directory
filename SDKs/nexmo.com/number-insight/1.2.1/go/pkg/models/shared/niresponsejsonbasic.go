package shared

type NiResponseJSONBasic struct {
	CountryCode               *string `json:"country_code"`
	CountryCodeIso3           *string `json:"country_code_iso3"`
	CountryName               *string `json:"country_name"`
	CountryPrefix             *string `json:"country_prefix"`
	InternationalFormatNumber *string `json:"international_format_number"`
	NationalFormatNumber      *string `json:"national_format_number"`
	RequestID                 *string `json:"request_id"`
	Status                    *int64  `json:"status"`
	StatusMessage             *string `json:"status_message"`
}
