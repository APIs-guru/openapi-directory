package operations

import (
	"openapi/pkg/models/shared"
)

type GetApodQueryParams struct {
	Date *string `queryParam:"style=form,explode=true,name=date"`
	Hd   *bool   `queryParam:"style=form,explode=true,name=hd"`
}

type GetApodSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetApodRequest struct {
	QueryParams GetApodQueryParams
	Security    GetApodSecurity
}

type GetApodResponse struct {
	ContentType                    string
	GetApod200ApplicationJSONAnies []interface{}
	StatusCode                     int64
}
