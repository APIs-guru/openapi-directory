package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams struct {
	SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
}

type SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams struct {
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

type SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity struct {
	Option1 *SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3 `security:"option"`
}

type SheetsSpreadsheetsValuesBatchClearByDataFilterRequest struct {
	PathParams  SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams
	QueryParams SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams
	Request     *shared.BatchClearValuesByDataFilterRequest `request:"mediaType=application/json"`
	Security    SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity
}

type SheetsSpreadsheetsValuesBatchClearByDataFilterResponse struct {
	BatchClearValuesByDataFilterResponse *shared.BatchClearValuesByDataFilterResponse
	ContentType                          string
	StatusCode                           int64
}
