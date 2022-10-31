package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams struct {
	SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
}

type SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams struct {
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

type SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity struct {
	Option1 *SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3 `security:"option"`
}

type SheetsSpreadsheetsValuesBatchGetByDataFilterRequest struct {
	PathParams  SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams
	QueryParams SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams
	Request     *shared.BatchGetValuesByDataFilterRequest `request:"mediaType=application/json"`
	Security    SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity
}

type SheetsSpreadsheetsValuesBatchGetByDataFilterResponse struct {
	BatchGetValuesByDataFilterResponse *shared.BatchGetValuesByDataFilterResponse
	ContentType                        string
	StatusCode                         int64
}
