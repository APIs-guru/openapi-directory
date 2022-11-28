package operations

import (
	"openapi/pkg/models/shared"
)

var ChangeAccountSettingsServerList = []string{
	"https://rest.nexmo.com",
}

type ChangeAccountSettingsQueryParams struct {
	APIKey    string `queryParam:"style=form,explode=true,name=api_key"`
	APISecret string `queryParam:"style=form,explode=true,name=api_secret"`
}

type ChangeAccountSettingsRequest struct {
	ServerURL   *string
	QueryParams ChangeAccountSettingsQueryParams
	Request     *shared.AccountSettingsRequest `request:"mediaType=application/x-www-form-urlencoded"`
}

type ChangeAccountSettingsResponse struct {
	Body            []byte
	ContentType     string
	StatusCode      int64
	AccountSettings *shared.AccountSettings
}
