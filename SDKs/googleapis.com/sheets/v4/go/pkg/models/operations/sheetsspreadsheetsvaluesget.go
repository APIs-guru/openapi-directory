package operations

import (
	"openapi/pkg/models/shared"
)

type SheetsSpreadsheetsValuesGetPathParams struct {
	Range         string `pathParam:"style=simple,explode=false,name=range"`
	SpreadsheetID string `pathParam:"style=simple,explode=false,name=spreadsheetId"`
}

type SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum string

const (
	SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnumSerialNumber    SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum = "SERIAL_NUMBER"
	SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnumFormattedString SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum = "FORMATTED_STRING"
)

type SheetsSpreadsheetsValuesGetMajorDimensionEnum string

const (
	SheetsSpreadsheetsValuesGetMajorDimensionEnumDimensionUnspecified SheetsSpreadsheetsValuesGetMajorDimensionEnum = "DIMENSION_UNSPECIFIED"
	SheetsSpreadsheetsValuesGetMajorDimensionEnumRows                 SheetsSpreadsheetsValuesGetMajorDimensionEnum = "ROWS"
	SheetsSpreadsheetsValuesGetMajorDimensionEnumColumns              SheetsSpreadsheetsValuesGetMajorDimensionEnum = "COLUMNS"
)

type SheetsSpreadsheetsValuesGetValueRenderOptionEnum string

const (
	SheetsSpreadsheetsValuesGetValueRenderOptionEnumFormattedValue   SheetsSpreadsheetsValuesGetValueRenderOptionEnum = "FORMATTED_VALUE"
	SheetsSpreadsheetsValuesGetValueRenderOptionEnumUnformattedValue SheetsSpreadsheetsValuesGetValueRenderOptionEnum = "UNFORMATTED_VALUE"
	SheetsSpreadsheetsValuesGetValueRenderOptionEnumFormula          SheetsSpreadsheetsValuesGetValueRenderOptionEnum = "FORMULA"
)

type SheetsSpreadsheetsValuesGetQueryParams struct {
	DollarXgafv          *shared.XgafvEnum                                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken          *string                                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt                  *shared.AltEnum                                      `queryParam:"style=form,explode=true,name=alt"`
	Callback             *string                                              `queryParam:"style=form,explode=true,name=callback"`
	DateTimeRenderOption *SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum `queryParam:"style=form,explode=true,name=dateTimeRenderOption"`
	Fields               *string                                              `queryParam:"style=form,explode=true,name=fields"`
	Key                  *string                                              `queryParam:"style=form,explode=true,name=key"`
	MajorDimension       *SheetsSpreadsheetsValuesGetMajorDimensionEnum       `queryParam:"style=form,explode=true,name=majorDimension"`
	OauthToken           *string                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint          *bool                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser            *string                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType           *string                                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol       *string                                              `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValueRenderOption    *SheetsSpreadsheetsValuesGetValueRenderOptionEnum    `queryParam:"style=form,explode=true,name=valueRenderOption"`
}

type SheetsSpreadsheetsValuesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SheetsSpreadsheetsValuesGetSecurity struct {
	Option1 *SheetsSpreadsheetsValuesGetSecurityOption1 `security:"option"`
	Option2 *SheetsSpreadsheetsValuesGetSecurityOption2 `security:"option"`
	Option3 *SheetsSpreadsheetsValuesGetSecurityOption3 `security:"option"`
	Option4 *SheetsSpreadsheetsValuesGetSecurityOption4 `security:"option"`
	Option5 *SheetsSpreadsheetsValuesGetSecurityOption5 `security:"option"`
}

type SheetsSpreadsheetsValuesGetRequest struct {
	PathParams  SheetsSpreadsheetsValuesGetPathParams
	QueryParams SheetsSpreadsheetsValuesGetQueryParams
	Security    SheetsSpreadsheetsValuesGetSecurity
}

type SheetsSpreadsheetsValuesGetResponse struct {
	ContentType string
	StatusCode  int64
	ValueRange  *shared.ValueRange
}
