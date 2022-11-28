package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCreditCardSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateCreditCardDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateCreditCardRequest struct {
	Request  shared.CreditCard `request:"mediaType=application/json"`
	Security CreateCreditCardSecurity
}

type CreateCreditCardResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	CreateCreditCard200ApplicationJSONObject     map[string]interface{}
	CreateCreditCardDefaultApplicationJSONObject *CreateCreditCardDefaultApplicationJSON
}
