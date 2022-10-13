package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsBatchUpdatePathParams struct {
	SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
}

type SheetsSpreadsheetsBatchUpdateQueryParams struct {
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

type SheetsSpreadsheetsBatchUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsBatchUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsBatchUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsBatchUpdateSecurity struct {
	Option1 *SheetsSpreadsheetsBatchUpdateSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsBatchUpdateSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsBatchUpdateSecurityOption3 `security:"option"`
}

type SheetsSpreadsheetsBatchUpdateRequest struct {
	PathParams  SheetsSpreadsheetsBatchUpdatePathParams
	QueryParams SheetsSpreadsheetsBatchUpdateQueryParams
	Request     *shared.BatchUpdateSpreadsheetRequest `request:"mediaType=application/json"`
	Security    SheetsSpreadsheetsBatchUpdateSecurity
}

type SheetsSpreadsheetsBatchUpdateResponse struct {
	BatchUpdateSpreadsheetResponse *shared.BatchUpdateSpreadsheetResponse
	ContentType                    string
	StatusCode                     int64
}
