package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsValuesUpdatePathParams struct {
	Range         string `pathParam:"style=simple,explode=false,name=range"`
	SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
}

type SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum string

const (
	SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnumSerialNumber    SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum = "SERIAL_NUMBER"
	SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnumFormattedString SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum = "FORMATTED_STRING"
)

type SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum string

const (
	SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnumFormattedValue   SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum = "FORMATTED_VALUE"
	SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnumUnformattedValue SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum = "UNFORMATTED_VALUE"
	SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnumFormula          SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum = "FORMULA"
)

type SheetsSpreadsheetsValuesUpdateValueInputOptionEnum string

const (
	SheetsSpreadsheetsValuesUpdateValueInputOptionEnumInputValueOptionUnspecified SheetsSpreadsheetsValuesUpdateValueInputOptionEnum = "INPUT_VALUE_OPTION_UNSPECIFIED"
	SheetsSpreadsheetsValuesUpdateValueInputOptionEnumRaw                         SheetsSpreadsheetsValuesUpdateValueInputOptionEnum = "RAW"
	SheetsSpreadsheetsValuesUpdateValueInputOptionEnumUserEntered                 SheetsSpreadsheetsValuesUpdateValueInputOptionEnum = "USER_ENTERED"
)

type SheetsSpreadsheetsValuesUpdateQueryParams struct {
	DollarXgafv                  *shared.XgafvEnum                                               `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                  *string                                                         `queryParam:"style=form,explode=true,name=access_token"`
	Alt                          *shared.AltEnum                                                 `queryParam:"style=form,explode=true,name=alt"`
	Callback                     *string                                                         `queryParam:"style=form,explode=true,name=callback"`
	Fields                       *string                                                         `queryParam:"style=form,explode=true,name=fields"`
	IncludeValuesInResponse      *bool                                                           `queryParam:"style=form,explode=true,name=includeValuesInResponse"`
	Key                          *string                                                         `queryParam:"style=form,explode=true,name=key"`
	OauthToken                   *string                                                         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                  *bool                                                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                    *string                                                         `queryParam:"style=form,explode=true,name=quotaUser"`
	ResponseDateTimeRenderOption *SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum `queryParam:"style=form,explode=true,name=responseDateTimeRenderOption"`
	ResponseValueRenderOption    *SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum    `queryParam:"style=form,explode=true,name=responseValueRenderOption"`
	UploadType                   *string                                                         `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol               *string                                                         `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValueInputOption             *SheetsSpreadsheetsValuesUpdateValueInputOptionEnum             `queryParam:"style=form,explode=true,name=valueInputOption"`
}

type SheetsSpreadsheetsValuesUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesUpdateSecurity struct {
	Option1 *SheetsSpreadsheetsValuesUpdateSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsValuesUpdateSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsValuesUpdateSecurityOption3 `security:"option"`
}

type SheetsSpreadsheetsValuesUpdateRequest struct {
	PathParams  SheetsSpreadsheetsValuesUpdatePathParams
	QueryParams SheetsSpreadsheetsValuesUpdateQueryParams
	Request     *shared.ValueRange `request:"mediaType=application/json"`
	Security    SheetsSpreadsheetsValuesUpdateSecurity
}

type SheetsSpreadsheetsValuesUpdateResponse struct {
	ContentType          string
	StatusCode           int64
	UpdateValuesResponse *shared.UpdateValuesResponse
}
