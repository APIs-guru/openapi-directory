package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedCredentialsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetManagedCredentialsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetManagedCredentialsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetManagedCredentialsSecurity struct {
	Option1 *GetManagedCredentialsSecurityOption1 `security:"option"`
	Option2 *GetManagedCredentialsSecurityOption2 `security:"option"`
}

type GetManagedCredentialsRequest struct {
	QueryParams GetManagedCredentialsQueryParams
	Security    GetManagedCredentialsSecurity
}

type GetManagedCredentials200ApplicationJSON struct {
	Data    []shared.ManagedCredential `json:"data"`
	Page    *int64                     `json:"page"`
	Pages   *int64                     `json:"pages"`
	Results *int64                     `json:"results"`
}

type GetManagedCredentialsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetManagedCredentialsResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetManagedCredentials200ApplicationJSONObject     *GetManagedCredentials200ApplicationJSON
	GetManagedCredentialsDefaultApplicationJSONObject *GetManagedCredentialsDefaultApplicationJSON
}
