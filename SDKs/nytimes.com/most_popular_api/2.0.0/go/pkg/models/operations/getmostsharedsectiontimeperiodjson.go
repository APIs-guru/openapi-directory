package operations

import (
	"openapi/pkg/models/shared"
)

type GetMostsharedSectionTimePeriodJSONPathParams struct {
	Section    shared.SectionEnum    `pathParam:"style=simple,explode=false,name=section"`
	TimePeriod shared.TimePeriodEnum `pathParam:"style=simple,explode=false,name=time-period"`
}

type GetMostsharedSectionTimePeriodJSONSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetMostsharedSectionTimePeriodJSONRequest struct {
	PathParams GetMostsharedSectionTimePeriodJSONPathParams
	Security   GetMostsharedSectionTimePeriodJSONSecurity
}

type GetMostsharedSectionTimePeriodJSON200ApplicationJSON struct {
	Copyright  *string          `json:"copyright"`
	NumResults *int64           `json:"num_results"`
	Results    []shared.Article `json:"results"`
	Status     *string          `json:"status"`
}

type GetMostsharedSectionTimePeriodJSON400ApplicationJSON struct {
	Copyright *string       `json:"copyright"`
	Errors    []string      `json:"errors"`
	Results   []interface{} `json:"results"`
	Status    *string       `json:"status"`
}

type GetMostsharedSectionTimePeriodJSONResponse struct {
	ContentType                                                string
	GetMostsharedSectionTimePeriodJSON200ApplicationJSONObject *GetMostsharedSectionTimePeriodJSON200ApplicationJSON
	GetMostsharedSectionTimePeriodJSON400ApplicationJSONObject *GetMostsharedSectionTimePeriodJSON400ApplicationJSON
	StatusCode                                                 int64
}
