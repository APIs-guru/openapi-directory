package operations

import (
	"openapi/pkg/models/shared"
)

type GetMostemailedSectionTimePeriodJSONPathParams struct {
	Section    shared.SectionEnum    `pathParam:"style=simple,explode=false,name=section"`
	TimePeriod shared.TimePeriodEnum `pathParam:"style=simple,explode=false,name=time-period"`
}

type GetMostemailedSectionTimePeriodJSONSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetMostemailedSectionTimePeriodJSONRequest struct {
	PathParams GetMostemailedSectionTimePeriodJSONPathParams
	Security   GetMostemailedSectionTimePeriodJSONSecurity
}

type GetMostemailedSectionTimePeriodJSON200ApplicationJSON struct {
	Copyright  *string                       `json:"copyright"`
	NumResults *int64                        `json:"num_results"`
	Results    []shared.ArticleWithCountType `json:"results"`
	Status     *string                       `json:"status"`
}

type GetMostemailedSectionTimePeriodJSON400ApplicationJSON struct {
	Copyright *string       `json:"copyright"`
	Errors    []string      `json:"errors"`
	Results   []interface{} `json:"results"`
	Status    *string       `json:"status"`
}

type GetMostemailedSectionTimePeriodJSONResponse struct {
	Body                                                        []byte
	ContentType                                                 string
	GetMostemailedSectionTimePeriodJSON200ApplicationJSONObject *GetMostemailedSectionTimePeriodJSON200ApplicationJSON
	GetMostemailedSectionTimePeriodJSON400ApplicationJSONObject *GetMostemailedSectionTimePeriodJSON400ApplicationJSON
	GetMostemailedSectionTimePeriodJSON403ApplicationJSONObject map[string]interface{}
	StatusCode                                                  int64
}
