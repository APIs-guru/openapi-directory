package operations

import (
"openapi/pkg/models/shared")

type SheetsSpreadsheetsSheetsCopyToPathParams struct {
    SheetID int64 `pathParam:"style=simple,explode=false,name=sheetId"`
    SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
    
}

type SheetsSpreadsheetsSheetsCopyToQueryParams struct {
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

type SheetsSpreadsheetsSheetsCopyToSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsSheetsCopyToSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsSheetsCopyToSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsSheetsCopyToSecurity struct {
    Option1 *SheetsSpreadsheetsSheetsCopyToSecurityOption1 `security:"option"`
    Option2 *SheetsSpreadsheetsSheetsCopyToSecurityOption2 `security:"option"`
    Option3 *SheetsSpreadsheetsSheetsCopyToSecurityOption3 `security:"option"`
    
}

type SheetsSpreadsheetsSheetsCopyToRequest struct {
    PathParams SheetsSpreadsheetsSheetsCopyToPathParams 
    QueryParams SheetsSpreadsheetsSheetsCopyToQueryParams 
    Request *shared.CopySheetToAnotherSpreadsheetRequest `request:"mediaType=application/json"`
    Security SheetsSpreadsheetsSheetsCopyToSecurity 
    
}

type SheetsSpreadsheetsSheetsCopyToResponse struct {
    ContentType string 
    SheetProperties *shared.SheetProperties 
    StatusCode int64 
    
}

