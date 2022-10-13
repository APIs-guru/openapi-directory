package shared

type BranchModel struct {
	Address1     *string `json:"Address1"`
	Address2     *string `json:"Address2"`
	Address3     *string `json:"Address3"`
	Address4     *string `json:"Address4"`
	CompanyName  *string `json:"CompanyName"`
	County       *string `json:"County"`
	EMailAddress *string `json:"EMailAddress"`
	ETag         *string `json:"ETag"`
	FaxPhone     *string `json:"FaxPhone"`
	LandPhone    *string `json:"LandPhone"`
	Name         *string `json:"Name"`
	Oid          *string `json:"OID"`
	Postcode     *string `json:"Postcode"`
	WebAddress   *string `json:"WebAddress"`
}
