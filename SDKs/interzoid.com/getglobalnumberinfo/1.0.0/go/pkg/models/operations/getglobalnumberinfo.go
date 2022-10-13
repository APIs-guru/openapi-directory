package operations

type GetglobalnumberinfoQueryParams struct {
	Intlnumber string `queryParam:"style=form,explode=true,name=intlnumber"`
	License    string `queryParam:"style=form,explode=true,name=license"`
}

type GetglobalnumberinfoRequest struct {
	QueryParams GetglobalnumberinfoQueryParams
}

type Getglobalnumberinfo200ApplicationJSON struct {
	Code            *string `json:"Code"`
	Country         *string `json:"Country"`
	Credits         *string `json:"Credits"`
	Language2       *string `json:"Language2"`
	Language3       *string `json:"Language3"`
	Mobile          *string `json:"Mobile"`
	PrimaryCity     *string `json:"PrimaryCity"`
	PrimaryLanguage *string `json:"PrimaryLanguage"`
	Region          *string `json:"Region"`
	Wealth          *string `json:"Wealth"`
}

type GetglobalnumberinfoResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	Getglobalnumberinfo200ApplicationJSONObject *Getglobalnumberinfo200ApplicationJSON
}
