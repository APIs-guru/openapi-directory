package operations

import (
"openapi/pkg/models/shared")

type SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams struct {
    SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
    
}

type SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams struct {
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

type SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity struct {
    Option1 *SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1 `security:"option"`
    Option2 *SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2 `security:"option"`
    Option3 *SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3 `security:"option"`
    
}

type SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest struct {
    PathParams SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams 
    QueryParams SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams 
    Request *shared.BatchUpdateValuesByDataFilterRequest `request:"mediaType=application/json"`
    Security SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity 
    
}

type SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse struct {
    BatchUpdateValuesByDataFilterResponse *shared.BatchUpdateValuesByDataFilterResponse 
    ContentType string 
    StatusCode int64 
    
}

