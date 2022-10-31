package operations

import (
	"openapi/pkg/models/shared"
)

type GetMostviewedSectionTimePeriodJSONPathParams struct {
	Section    shared.SectionEnum    `pathParam:"style=simple,explode=false,name=section"`
	TimePeriod shared.TimePeriodEnum `pathParam:"style=simple,explode=false,name=time-period"`
}

type GetMostviewedSectionTimePeriodJSONSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetMostviewedSectionTimePeriodJSONRequest struct {
	PathParams GetMostviewedSectionTimePeriodJSONPathParams
	Security   GetMostviewedSectionTimePeriodJSONSecurity
}

type GetMostviewedSectionTimePeriodJSON200ApplicationJSON struct {
	Copyright  *string          `json:"copyright,omitempty"`
	NumResults *int64           `json:"num_results,omitempty"`
	Results    []shared.Article `json:"results,omitempty"`
	Status     *string          `json:"status,omitempty"`
}

type GetMostviewedSectionTimePeriodJSONResponse struct {
	ContentType                                                string
	GetMostviewedSectionTimePeriodJSON200ApplicationJSONObject *GetMostviewedSectionTimePeriodJSON200ApplicationJSON
	StatusCode                                                 int64
}
