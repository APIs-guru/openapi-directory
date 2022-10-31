package operations

import (
"openapi/pkg/models/shared")

type SheetsSpreadsheetsValuesBatchGetPathParams struct {
    SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
    
}


type SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum string

const (
    SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnumSerialNumber SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum = "SERIAL_NUMBER"
SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnumFormattedString SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum = "FORMATTED_STRING"
)



type SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum string

const (
    SheetsSpreadsheetsValuesBatchGetMajorDimensionEnumDimensionUnspecified SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum = "DIMENSION_UNSPECIFIED"
SheetsSpreadsheetsValuesBatchGetMajorDimensionEnumRows SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum = "ROWS"
SheetsSpreadsheetsValuesBatchGetMajorDimensionEnumColumns SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum = "COLUMNS"
)



type SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum string

const (
    SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnumFormattedValue SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum = "FORMATTED_VALUE"
SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnumUnformattedValue SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum = "UNFORMATTED_VALUE"
SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnumFormula SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum = "FORMULA"
)


type SheetsSpreadsheetsValuesBatchGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DateTimeRenderOption *SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum `queryParam:"style=form,explode=true,name=dateTimeRenderOption"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MajorDimension *SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum `queryParam:"style=form,explode=true,name=majorDimension"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Ranges []string `queryParam:"style=form,explode=true,name=ranges"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    ValueRenderOption *SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum `queryParam:"style=form,explode=true,name=valueRenderOption"`
    
}

type SheetsSpreadsheetsValuesBatchGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesBatchGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesBatchGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesBatchGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesBatchGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesBatchGetSecurity struct {
    Option1 *SheetsSpreadsheetsValuesBatchGetSecurityOption1 `security:"option"`
    Option2 *SheetsSpreadsheetsValuesBatchGetSecurityOption2 `security:"option"`
    Option3 *SheetsSpreadsheetsValuesBatchGetSecurityOption3 `security:"option"`
    Option4 *SheetsSpreadsheetsValuesBatchGetSecurityOption4 `security:"option"`
    Option5 *SheetsSpreadsheetsValuesBatchGetSecurityOption5 `security:"option"`
    
}

type SheetsSpreadsheetsValuesBatchGetRequest struct {
    PathParams SheetsSpreadsheetsValuesBatchGetPathParams 
    QueryParams SheetsSpreadsheetsValuesBatchGetQueryParams 
    Security SheetsSpreadsheetsValuesBatchGetSecurity 
    
}

type SheetsSpreadsheetsValuesBatchGetResponse struct {
    BatchGetValuesResponse *shared.BatchGetValuesResponse 
    ContentType string 
    StatusCode int64 
    
}

