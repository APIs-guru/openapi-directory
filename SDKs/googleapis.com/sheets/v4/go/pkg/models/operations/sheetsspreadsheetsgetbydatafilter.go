package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsGetByDataFilterPathParams struct {
	SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
}

type SheetsSpreadsheetsGetByDataFilterQueryParams struct {
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

type SheetsSpreadsheetsGetByDataFilterSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsGetByDataFilterSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsGetByDataFilterSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsGetByDataFilterSecurity struct {
	Option1 *SheetsSpreadsheetsGetByDataFilterSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsGetByDataFilterSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsGetByDataFilterSecurityOption3 `security:"option"`
}

type SheetsSpreadsheetsGetByDataFilterRequest struct {
	PathParams  SheetsSpreadsheetsGetByDataFilterPathParams
	QueryParams SheetsSpreadsheetsGetByDataFilterQueryParams
	Request     *shared.GetSpreadsheetByDataFilterRequest `request:"mediaType=application/json"`
	Security    SheetsSpreadsheetsGetByDataFilterSecurity
}

type SheetsSpreadsheetsGetByDataFilterResponse struct {
	ContentType string
	Spreadsheet *shared.Spreadsheet
	StatusCode  int64
}
