package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsCreateQueryParams struct {
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

type SheetsSpreadsheetsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsCreateSecurity struct {
	Option1 *SheetsSpreadsheetsCreateSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsCreateSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsCreateSecurityOption3 `security:"option"`
}

type SheetsSpreadsheetsCreateRequest struct {
	QueryParams SheetsSpreadsheetsCreateQueryParams
	Request     *shared.SpreadsheetInput `request:"mediaType=application/json"`
	Security    SheetsSpreadsheetsCreateSecurity
}

type SheetsSpreadsheetsCreateResponse struct {
	ContentType string
	Spreadsheet *shared.Spreadsheet
	StatusCode  int64
}
