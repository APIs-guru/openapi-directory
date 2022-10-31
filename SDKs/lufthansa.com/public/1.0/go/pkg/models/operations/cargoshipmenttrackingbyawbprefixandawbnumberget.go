package operations

import (
	"openapi/pkg/models/shared"
)

type CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams struct {
	AWbNumber string `pathParam:"style=simple,explode=false,name=aWBNumber"`
	AWbPrefix string `pathParam:"style=simple,explode=false,name=aWBPrefix"`
}

type CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
}

type CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest struct {
	PathParams CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams
	Headers    CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders
	Security   CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity
}

type CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse struct {
	CargoShipmentTrackingByAwbPrefixAndAwbNumberGet200ApplicationJSONObject map[string]interface{}
	ContentType                                                             string
	StatusCode                                                              int64
}
