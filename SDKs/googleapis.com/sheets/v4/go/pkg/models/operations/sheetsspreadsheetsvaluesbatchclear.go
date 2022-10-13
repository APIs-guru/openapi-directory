package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsValuesBatchClearPathParams struct {
	SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
}

type SheetsSpreadsheetsValuesBatchClearQueryParams struct {
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

type SheetsSpreadsheetsValuesBatchClearSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchClearSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchClearSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchClearSecurity struct {
	Option1 *SheetsSpreadsheetsValuesBatchClearSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsValuesBatchClearSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsValuesBatchClearSecurityOption3 `security:"option"`
}

type SheetsSpreadsheetsValuesBatchClearRequest struct {
	PathParams  SheetsSpreadsheetsValuesBatchClearPathParams
	QueryParams SheetsSpreadsheetsValuesBatchClearQueryParams
	Request     *shared.BatchClearValuesRequest `request:"mediaType=application/json"`
	Security    SheetsSpreadsheetsValuesBatchClearSecurity
}

type SheetsSpreadsheetsValuesBatchClearResponse struct {
	BatchClearValuesResponse *shared.BatchClearValuesResponse
	ContentType              string
	StatusCode               int64
}
