package operations

import (
	"openapi/pkg/models/shared"
)

type SecretsSecretRolesListQueryParams struct {
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
	Slug   *string `queryParam:"style=form,explode=true,name=slug"`
}

type SecretsSecretRolesList200ApplicationJSON struct {
	Count    int64               `json:"count"`
	Next     *string             `json:"next,omitempty"`
	Previous *string             `json:"previous,omitempty"`
	Results  []shared.SecretRole `json:"results"`
}

type SecretsSecretRolesListRequest struct {
	QueryParams SecretsSecretRolesListQueryParams
}

type SecretsSecretRolesListResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	SecretsSecretRolesList200ApplicationJSONObject *SecretsSecretRolesList200ApplicationJSON
}
