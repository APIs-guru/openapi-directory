package shared

type BranchModel struct {
	Address1     *string `json:"Address1,omitempty"`
	Address2     *string `json:"Address2,omitempty"`
	Address3     *string `json:"Address3,omitempty"`
	Address4     *string `json:"Address4,omitempty"`
	CompanyName  *string `json:"CompanyName,omitempty"`
	County       *string `json:"County,omitempty"`
	EMailAddress *string `json:"EMailAddress,omitempty"`
	ETag         *string `json:"ETag,omitempty"`
	FaxPhone     *string `json:"FaxPhone,omitempty"`
	LandPhone    *string `json:"LandPhone,omitempty"`
	Name         *string `json:"Name,omitempty"`
	Oid          *string `json:"OID,omitempty"`
	Postcode     *string `json:"Postcode,omitempty"`
	WebAddress   *string `json:"WebAddress,omitempty"`
}
