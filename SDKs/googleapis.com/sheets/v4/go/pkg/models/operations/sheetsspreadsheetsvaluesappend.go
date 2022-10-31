package operations

import (
"openapi/pkg/models/shared")

type SheetsSpreadsheetsValuesAppendPathParams struct {
    Range string `pathParam:"style=simple,explode=false,name=range"`
    SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
    
}


type SheetsSpreadsheetsValuesAppendInsertDataOptionEnum string

const (
    SheetsSpreadsheetsValuesAppendInsertDataOptionEnumOverwrite SheetsSpreadsheetsValuesAppendInsertDataOptionEnum = "OVERWRITE"
SheetsSpreadsheetsValuesAppendInsertDataOptionEnumInsertRows SheetsSpreadsheetsValuesAppendInsertDataOptionEnum = "INSERT_ROWS"
)



type SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum string

const (
    SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnumSerialNumber SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum = "SERIAL_NUMBER"
SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnumFormattedString SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum = "FORMATTED_STRING"
)



type SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum string

const (
    SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnumFormattedValue SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum = "FORMATTED_VALUE"
SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnumUnformattedValue SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum = "UNFORMATTED_VALUE"
SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnumFormula SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum = "FORMULA"
)



type SheetsSpreadsheetsValuesAppendValueInputOptionEnum string

const (
    SheetsSpreadsheetsValuesAppendValueInputOptionEnumInputValueOptionUnspecified SheetsSpreadsheetsValuesAppendValueInputOptionEnum = "INPUT_VALUE_OPTION_UNSPECIFIED"
SheetsSpreadsheetsValuesAppendValueInputOptionEnumRaw SheetsSpreadsheetsValuesAppendValueInputOptionEnum = "RAW"
SheetsSpreadsheetsValuesAppendValueInputOptionEnumUserEntered SheetsSpreadsheetsValuesAppendValueInputOptionEnum = "USER_ENTERED"
)


type SheetsSpreadsheetsValuesAppendQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeValuesInResponse *bool `queryParam:"style=form,explode=true,name=includeValuesInResponse"`
    InsertDataOption *SheetsSpreadsheetsValuesAppendInsertDataOptionEnum `queryParam:"style=form,explode=true,name=insertDataOption"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ResponseDateTimeRenderOption *SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum `queryParam:"style=form,explode=true,name=responseDateTimeRenderOption"`
    ResponseValueRenderOption *SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum `queryParam:"style=form,explode=true,name=responseValueRenderOption"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    ValueInputOption *SheetsSpreadsheetsValuesAppendValueInputOptionEnum `queryParam:"style=form,explode=true,name=valueInputOption"`
    
}

type SheetsSpreadsheetsValuesAppendSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesAppendSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesAppendSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SheetsSpreadsheetsValuesAppendSecurity struct {
    Option1 *SheetsSpreadsheetsValuesAppendSecurityOption1 `security:"option"`
    Option2 *SheetsSpreadsheetsValuesAppendSecurityOption2 `security:"option"`
    Option3 *SheetsSpreadsheetsValuesAppendSecurityOption3 `security:"option"`
    
}

type SheetsSpreadsheetsValuesAppendRequest struct {
    PathParams SheetsSpreadsheetsValuesAppendPathParams 
    QueryParams SheetsSpreadsheetsValuesAppendQueryParams 
    Request *shared.ValueRange `request:"mediaType=application/json"`
    Security SheetsSpreadsheetsValuesAppendSecurity 
    
}

type SheetsSpreadsheetsValuesAppendResponse struct {
    AppendValuesResponse *shared.AppendValuesResponse 
    ContentType string 
    StatusCode int64 
    
}

