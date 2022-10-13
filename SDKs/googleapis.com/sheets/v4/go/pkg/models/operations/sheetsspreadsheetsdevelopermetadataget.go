package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsDeveloperMetadataGetPathParams struct {
	MetadataID    int64  `pathParam:"style=simple,explode=false,name=metadataId"`
	SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
}

type SheetsSpreadsheetsDeveloperMetadataGetQueryParams struct {
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

type SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsDeveloperMetadataGetSecurity struct {
	Option1 *SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3 `security:"option"`
}

type SheetsSpreadsheetsDeveloperMetadataGetRequest struct {
	PathParams  SheetsSpreadsheetsDeveloperMetadataGetPathParams
	QueryParams SheetsSpreadsheetsDeveloperMetadataGetQueryParams
	Security    SheetsSpreadsheetsDeveloperMetadataGetSecurity
}

type SheetsSpreadsheetsDeveloperMetadataGetResponse struct {
	ContentType       string
	DeveloperMetadata *shared.DeveloperMetadata
	StatusCode        int64
}
