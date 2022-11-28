package operations

import (
	"openapi/pkg/models/shared"
)

type PubsubProjectsSchemasValidatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type PubsubProjectsSchemasValidateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PubsubProjectsSchemasValidateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSchemasValidateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSchemasValidateSecurity struct {
	Option1 *PubsubProjectsSchemasValidateSecurityOption1 `security:"option"`
	Option2 *PubsubProjectsSchemasValidateSecurityOption2 `security:"option"`
}

type PubsubProjectsSchemasValidateRequest struct {
	PathParams  PubsubProjectsSchemasValidatePathParams
	QueryParams PubsubProjectsSchemasValidateQueryParams
	Request     *shared.ValidateSchemaRequestInput `request:"mediaType=application/json"`
	Security    PubsubProjectsSchemasValidateSecurity
}

type PubsubProjectsSchemasValidateResponse struct {
	ContentType            string
	StatusCode             int64
	ValidateSchemaResponse map[string]interface{}
}
