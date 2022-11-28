package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedContactsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetManagedContactsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetManagedContacts200ApplicationJSON struct {
	Data    []shared.ManagedContact `json:"data,omitempty"`
	Page    *int64                  `json:"page,omitempty"`
	Pages   *int64                  `json:"pages,omitempty"`
	Results *int64                  `json:"results,omitempty"`
}

type GetManagedContactsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedContactsRequest struct {
	QueryParams GetManagedContactsQueryParams
	Security    GetManagedContactsSecurity
}

type GetManagedContactsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetManagedContacts200ApplicationJSONObject     *GetManagedContacts200ApplicationJSON
	GetManagedContactsDefaultApplicationJSONObject *GetManagedContactsDefaultApplicationJSON
}
