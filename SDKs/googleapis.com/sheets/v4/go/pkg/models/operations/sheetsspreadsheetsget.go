package operations

import (
"openapi/pkg/models/shared")

type SheetsSpreadsheetsGetPathParams struct {
    SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
    
}

type SheetsSpreadsheetsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeGridData *bool `queryParam:"style=form,explode=true,name=includeGridData"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Ranges []string `queryParam:"style=form,explode=true,name=ranges"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SheetsSpreadsheetsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsGetSecurity struct {
    Option1 *SheetsSpreadsheetsGetSecurityOption1 `security:"option"`
    Option2 *SheetsSpreadsheetsGetSecurityOption2 `security:"option"`
    Option3 *SheetsSpreadsheetsGetSecurityOption3 `security:"option"`
    Option4 *SheetsSpreadsheetsGetSecurityOption4 `security:"option"`
    Option5 *SheetsSpreadsheetsGetSecurityOption5 `security:"option"`
    
}

type SheetsSpreadsheetsGetRequest struct {
    PathParams SheetsSpreadsheetsGetPathParams 
    QueryParams SheetsSpreadsheetsGetQueryParams 
    Security SheetsSpreadsheetsGetSecurity 
    
}

type SheetsSpreadsheetsGetResponse struct {
    ContentType string 
    Spreadsheet *shared.Spreadsheet 
    StatusCode int64 
    
}

