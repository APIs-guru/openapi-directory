package operations

import (
"openapi/pkg/models/shared")

type SheetsSpreadsheetsDeveloperMetadataSearchPathParams struct {
    SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
    
}

type SheetsSpreadsheetsDeveloperMetadataSearchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsDeveloperMetadataSearchSecurity struct {
    Option1 *SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1 `security:"option"`
    Option2 *SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2 `security:"option"`
    Option3 *SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3 `security:"option"`
    
}

type SheetsSpreadsheetsDeveloperMetadataSearchRequest struct {
    PathParams SheetsSpreadsheetsDeveloperMetadataSearchPathParams 
    QueryParams SheetsSpreadsheetsDeveloperMetadataSearchQueryParams 
    Request *shared.SearchDeveloperMetadataRequest `request:"mediaType=application/json"`
    Security SheetsSpreadsheetsDeveloperMetadataSearchSecurity 
    
}

type SheetsSpreadsheetsDeveloperMetadataSearchResponse struct {
    ContentType string 
    SearchDeveloperMetadataResponse *shared.SearchDeveloperMetadataResponse 
    StatusCode int64 
    
}

