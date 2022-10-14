package operations

type GetglobalnumberinfoQueryParams struct {
	Intlnumber string `queryParam:"style=form,explode=true,name=intlnumber"`
	License    string `queryParam:"style=form,explode=true,name=license"`
}

type GetglobalnumberinfoRequest struct {
	QueryParams GetglobalnumberinfoQueryParams
}

type Getglobalnumberinfo200ApplicationJSON struct {
	Code            *string `json:"Code,omitempty"`
	Country         *string `json:"Country,omitempty"`
	Credits         *string `json:"Credits,omitempty"`
	Language2       *string `json:"Language2,omitempty"`
	Language3       *string `json:"Language3,omitempty"`
	Mobile          *string `json:"Mobile,omitempty"`
	PrimaryCity     *string `json:"PrimaryCity,omitempty"`
	PrimaryLanguage *string `json:"PrimaryLanguage,omitempty"`
	Region          *string `json:"Region,omitempty"`
	Wealth          *string `json:"Wealth,omitempty"`
}

type GetglobalnumberinfoResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	Getglobalnumberinfo200ApplicationJSONObject *Getglobalnumberinfo200ApplicationJSON
}
