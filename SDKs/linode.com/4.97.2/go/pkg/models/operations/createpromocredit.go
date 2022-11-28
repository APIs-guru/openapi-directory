package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePromoCreditRequestBody struct {
	PromoCode string `json:"promo_code"`
}

type CreatePromoCreditSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreatePromoCreditDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreatePromoCreditRequest struct {
	Request  *CreatePromoCreditRequestBody `request:"mediaType=application/json"`
	Security CreatePromoCreditSecurity
}

type CreatePromoCreditResponse struct {
	ContentType                                   string
	Promotion                                     *shared.Promotion
	StatusCode                                    int64
	CreatePromoCreditDefaultApplicationJSONObject *CreatePromoCreditDefaultApplicationJSON
}
