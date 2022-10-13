package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedContactsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetManagedContactsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetManagedContactsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetManagedContactsSecurity struct {
	Option1 *GetManagedContactsSecurityOption1 `security:"option"`
	Option2 *GetManagedContactsSecurityOption2 `security:"option"`
}

type GetManagedContactsRequest struct {
	QueryParams GetManagedContactsQueryParams
	Security    GetManagedContactsSecurity
}

type GetManagedContacts200ApplicationJSON struct {
	Data    []shared.ManagedContact `json:"data"`
	Page    *int64                  `json:"page"`
	Pages   *int64                  `json:"pages"`
	Results *int64                  `json:"results"`
}

type GetManagedContactsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetManagedContactsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetManagedContacts200ApplicationJSONObject     *GetManagedContacts200ApplicationJSON
	GetManagedContactsDefaultApplicationJSONObject *GetManagedContactsDefaultApplicationJSON
}
