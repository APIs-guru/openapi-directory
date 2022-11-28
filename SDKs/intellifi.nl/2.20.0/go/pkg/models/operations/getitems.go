package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetItemsQueryParams struct {
	After           *time.Time               `queryParam:"style=form,explode=true,name=after"`
	AfterCode       *string                  `queryParam:"style=form,explode=true,name=after_code"`
	AfterID         *string                  `queryParam:"style=form,explode=true,name=after_id"`
	Before          *string                  `queryParam:"style=form,explode=true,name=before"`
	BeforeCode      *string                  `queryParam:"style=form,explode=true,name=before_code"`
	BeforeID        *string                  `queryParam:"style=form,explode=true,name=before_id"`
	CodeHex         *string                  `queryParam:"style=form,explode=true,name=code_hex"`
	From            *string                  `queryParam:"style=form,explode=true,name=from"`
	FromCode        *string                  `queryParam:"style=form,explode=true,name=from_code"`
	FromID          *string                  `queryParam:"style=form,explode=true,name=from_id"`
	ID              *string                  `queryParam:"style=form,explode=true,name=id"`
	IDOnly          *bool                    `queryParam:"style=form,explode=true,name=id_only"`
	IsPresent       *bool                    `queryParam:"style=form,explode=true,name=is_present"`
	Label           *string                  `queryParam:"style=form,explode=true,name=label"`
	Limit           *int64                   `queryParam:"style=form,explode=true,name=limit"`
	Location        *string                  `queryParam:"style=form,explode=true,name=location"`
	Metadata        *string                  `queryParam:"style=form,explode=true,name=metadata"`
	MoveCount       *int64                   `queryParam:"style=form,explode=true,name=move_count"`
	Populate        *string                  `queryParam:"style=form,explode=true,name=populate"`
	Protocol        *shared.ItemProtocolEnum `queryParam:"style=form,explode=true,name=protocol"`
	ResultsOnly     *bool                    `queryParam:"style=form,explode=true,name=results_only"`
	Select          *string                  `queryParam:"style=form,explode=true,name=select"`
	Sets            *string                  `queryParam:"style=form,explode=true,name=sets"`
	Sort            *string                  `queryParam:"style=form,explode=true,name=sort"`
	Technology      *shared.TechnologyEnum   `queryParam:"style=form,explode=true,name=technology"`
	Text            *string                  `queryParam:"style=form,explode=true,name=text"`
	TimeCreated     *string                  `queryParam:"style=form,explode=true,name=time_created"`
	TimeLastPresent *string                  `queryParam:"style=form,explode=true,name=time_last_present"`
	TimeMoved       *string                  `queryParam:"style=form,explode=true,name=time_moved"`
	TimeUpdated     *string                  `queryParam:"style=form,explode=true,name=time_updated"`
	TimeoutS        *float64                 `queryParam:"style=form,explode=true,name=timeout_s"`
	Type            *shared.ItemTypeEnum     `queryParam:"style=form,explode=true,name=type"`
	Until           *string                  `queryParam:"style=form,explode=true,name=until"`
	UntilCode       *string                  `queryParam:"style=form,explode=true,name=until_code"`
	UntilID         *string                  `queryParam:"style=form,explode=true,name=until_id"`
}

type GetItems200ApplicationJSON struct {
	Count           *int64        `json:"count,omitempty"`
	CountCurrent    *int64        `json:"count_current,omitempty"`
	IsLimited       *bool         `json:"is_limited,omitempty"`
	NextURL         *string       `json:"next_url,omitempty"`
	QueryDurationMs *int64        `json:"query_duration_ms,omitempty"`
	Results         []shared.Item `json:"results,omitempty"`
	URL             *string       `json:"url,omitempty"`
}

type GetItemsRequest struct {
	QueryParams GetItemsQueryParams
}

type GetItemsResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetItems200ApplicationJSONObject *GetItems200ApplicationJSON
}
