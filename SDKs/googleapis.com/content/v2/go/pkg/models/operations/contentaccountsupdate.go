package operations

import (
	"openapi/pkg/models/shared"
)

type ContentAccountsUpdatePathParams struct {
	AccountID  string `pathParam:"style=simple,explode=false,name=accountId"`
	MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
}

type ContentAccountsUpdateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	DryRun         *bool             `queryParam:"style=form,explode=true,name=dryRun"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ContentAccountsUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentAccountsUpdateRequest struct {
	PathParams  ContentAccountsUpdatePathParams
	QueryParams ContentAccountsUpdateQueryParams
	Request     *shared.Account `request:"mediaType=application/json"`
	Security    ContentAccountsUpdateSecurity
}

type ContentAccountsUpdateResponse struct {
	Account     *shared.Account
	ContentType string
	StatusCode  int64
}
