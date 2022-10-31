package shared



type OrganizationList struct {
    City *string `json:"city,omitempty"`
    Email *string `json:"email,omitempty"`
    FaxTel *string `json:"fax_tel,omitempty"`
    MainTel *string `json:"main_tel,omitempty"`
    Name string `json:"name"`
    OrgGUID *string `json:"org_guid,omitempty"`
    OrgVerboseName *string `json:"org_verbose_name,omitempty"`
    PostalCode *string `json:"postal_code,omitempty"`
    ProvinceState string `json:"province_state"`
    StreetAddress *string `json:"street_address,omitempty"`
    WebsiteURL *string `json:"website_url,omitempty"`
    
}

