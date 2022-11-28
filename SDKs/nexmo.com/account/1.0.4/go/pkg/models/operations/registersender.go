package operations

import (
	"openapi/pkg/models/shared"
)

var RegisterSenderServerList = []string{
	"https://rest.nexmo.com",
}

type RegisterSenderQueryParams struct {
	APIKey    string `queryParam:"style=form,explode=true,name=api_key"`
	APISecret string `queryParam:"style=form,explode=true,name=api_secret"`
}

type RegisterSenderRequest struct {
	ServerURL   *string
	QueryParams RegisterSenderQueryParams
	Request     shared.RegisterEmailRequest `request:"mediaType=application/json"`
}

type RegisterSenderResponse struct {
	ContentType           string
	StatusCode            int64
	RegisterEmailResponse *shared.RegisterEmailResponse
}
