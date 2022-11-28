package operations

import (
	"openapi/pkg/models/shared"
)

type SecretsSecretsListQueryParams struct {
	Device   *string `queryParam:"style=form,explode=true,name=device"`
	DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
	IDIn     *string `queryParam:"style=form,explode=true,name=id__in"`
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	Offset   *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q        *string `queryParam:"style=form,explode=true,name=q"`
	Role     *string `queryParam:"style=form,explode=true,name=role"`
	RoleID   *string `queryParam:"style=form,explode=true,name=role_id"`
	Tag      *string `queryParam:"style=form,explode=true,name=tag"`
}

type SecretsSecretsList200ApplicationJSON struct {
	Count    int64           `json:"count"`
	Next     *string         `json:"next,omitempty"`
	Previous *string         `json:"previous,omitempty"`
	Results  []shared.Secret `json:"results"`
}

type SecretsSecretsListRequest struct {
	QueryParams SecretsSecretsListQueryParams
}

type SecretsSecretsListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	SecretsSecretsList200ApplicationJSONObject *SecretsSecretsList200ApplicationJSON
}
