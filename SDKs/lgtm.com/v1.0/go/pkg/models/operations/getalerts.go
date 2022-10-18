package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlertsPathParams struct {
	AnalysisID string `pathParam:"style=simple,explode=false,name=analysis-id"`
}

type GetAlertsQueryParams struct {
	ExcludedFiles *bool   `queryParam:"style=form,explode=true,name=excluded-files"`
	SarifVersion  *string `queryParam:"style=form,explode=true,name=sarif-version"`
}

type GetAlertsSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetAlertsRequest struct {
	PathParams  GetAlertsPathParams
	QueryParams GetAlertsQueryParams
	Security    GetAlertsSecurity
}

type GetAlertsResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	GetAlerts200ApplicationJSONObject          map[string]interface{}
	GetAlerts200ApplicationSarifPlusJSONObject map[string]interface{}
}
