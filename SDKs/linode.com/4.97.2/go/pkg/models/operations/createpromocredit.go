package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePromoCreditRequestBody struct {
	PromoCode string `json:"promo_code"`
}

type CreatePromoCreditSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreatePromoCreditSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreatePromoCreditSecurity struct {
	Option1 *CreatePromoCreditSecurityOption1 `security:"option"`
	Option2 *CreatePromoCreditSecurityOption2 `security:"option"`
}

type CreatePromoCreditRequest struct {
	Request  *CreatePromoCreditRequestBody `request:"mediaType=application/json"`
	Security CreatePromoCreditSecurity
}

type CreatePromoCreditDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CreatePromoCreditResponse struct {
	ContentType                                   string
	Promotion                                     *shared.Promotion
	StatusCode                                    int64
	CreatePromoCreditDefaultApplicationJSONObject *CreatePromoCreditDefaultApplicationJSON
}
