package operations

import (
	"openapi/pkg/models/shared"
)

type CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum string

const (
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumFan CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "FAN"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumFco CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "FCO"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumFcp CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "FCP"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumFdg CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "FDG"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumFtf CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "FTF"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumFun CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "FUN"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumFwn CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "FWN"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumYco CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "YCO"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumYcp CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "YCP"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumYdg CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "YDG"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumYnb CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "YNB"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumYnz CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "YNZ"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumYtf CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "YTF"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumYun CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "YUN"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumZxb CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "ZXB"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumZxf CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "ZXF"
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumZxr CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = "ZXR"
)

type CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams struct {
	Destination string                                                                   `pathParam:"style=simple,explode=false,name=destination"`
	FromDate    string                                                                   `pathParam:"style=simple,explode=false,name=fromDate"`
	Origin      string                                                                   `pathParam:"style=simple,explode=false,name=origin"`
	ProductCode CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum `pathParam:"style=simple,explode=false,name=productCode"`
}

type CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders struct {
	Accept string `header:"name=Accept"`
}

type CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest struct {
	PathParams CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams
	Headers    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders
	Security   CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity
}

type CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse struct {
	CargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject map[string]interface{}
	ContentType                                                                       string
	StatusCode                                                                        int64
}
