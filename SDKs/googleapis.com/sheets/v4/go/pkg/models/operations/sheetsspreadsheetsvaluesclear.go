package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsValuesClearPathParams struct {
	Range         string `pathParam:"style=simple,explode=false,name=range"`
	SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
}

type SheetsSpreadsheetsValuesClearQueryParams struct {
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

type SheetsSpreadsheetsValuesClearSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesClearSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesClearSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesClearSecurity struct {
	Option1 *SheetsSpreadsheetsValuesClearSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsValuesClearSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsValuesClearSecurityOption3 `security:"option"`
}

type SheetsSpreadsheetsValuesClearRequest struct {
	PathParams  SheetsSpreadsheetsValuesClearPathParams
	QueryParams SheetsSpreadsheetsValuesClearQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
	Security    SheetsSpreadsheetsValuesClearSecurity
}

type SheetsSpreadsheetsValuesClearResponse struct {
	ClearValuesResponse *shared.ClearValuesResponse
	ContentType         string
	StatusCode          int64
}
