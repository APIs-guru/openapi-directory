package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsValuesBatchUpdatePathParams struct {
	SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
}

type SheetsSpreadsheetsValuesBatchUpdateQueryParams struct {
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

type SheetsSpreadsheetsValuesBatchUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchUpdateSecurity struct {
	Option1 *SheetsSpreadsheetsValuesBatchUpdateSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsValuesBatchUpdateSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsValuesBatchUpdateSecurityOption3 `security:"option"`
}

type SheetsSpreadsheetsValuesBatchUpdateRequest struct {
	PathParams  SheetsSpreadsheetsValuesBatchUpdatePathParams
	QueryParams SheetsSpreadsheetsValuesBatchUpdateQueryParams
	Request     *shared.BatchUpdateValuesRequest `request:"mediaType=application/json"`
	Security    SheetsSpreadsheetsValuesBatchUpdateSecurity
}

type SheetsSpreadsheetsValuesBatchUpdateResponse struct {
	BatchUpdateValuesResponse *shared.BatchUpdateValuesResponse
	ContentType               string
	StatusCode                int64
}
