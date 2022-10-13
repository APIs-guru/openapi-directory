package shared

type Organization struct {
	City           *string `json:"city"`
	Email          *string `json:"email"`
	FaxTel         *string `json:"fax_tel"`
	MainTel        *string `json:"main_tel"`
	Name           string  `json:"name"`
	OrgGUID        *string `json:"org_guid"`
	OrgVerboseName *string `json:"org_verbose_name"`
	PostalCode     *string `json:"postal_code"`
	ProvinceState  string  `json:"province_state"`
	StreetAddress  *string `json:"street_address"`
	WebsiteURL     *string `json:"website_url"`
}
