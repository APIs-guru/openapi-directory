package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPresencesQueryParams struct {
	After       *time.Time             `queryParam:"style=form,explode=true,name=after"`
	AfterID     *string                `queryParam:"style=form,explode=true,name=after_id"`
	Before      *string                `queryParam:"style=form,explode=true,name=before"`
	BeforeID    *string                `queryParam:"style=form,explode=true,name=before_id"`
	From        *string                `queryParam:"style=form,explode=true,name=from"`
	FromID      *string                `queryParam:"style=form,explode=true,name=from_id"`
	ID          *string                `queryParam:"style=form,explode=true,name=id"`
	IDOnly      *bool                  `queryParam:"style=form,explode=true,name=id_only"`
	Item        *string                `queryParam:"style=form,explode=true,name=item"`
	Limit       *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Location    *string                `queryParam:"style=form,explode=true,name=location"`
	Populate    *string                `queryParam:"style=form,explode=true,name=populate"`
	Proximity   *shared.ProximityEnum  `queryParam:"style=form,explode=true,name=proximity"`
	ResultsOnly *bool                  `queryParam:"style=form,explode=true,name=results_only"`
	Select      *string                `queryParam:"style=form,explode=true,name=select"`
	Sort        *string                `queryParam:"style=form,explode=true,name=sort"`
	Technology  *shared.TechnologyEnum `queryParam:"style=form,explode=true,name=technology"`
	TimeCreated *string                `queryParam:"style=form,explode=true,name=time_created"`
	TimeUpdated *string                `queryParam:"style=form,explode=true,name=time_updated"`
	TimeoutS    *float64               `queryParam:"style=form,explode=true,name=timeout_s"`
	Until       *string                `queryParam:"style=form,explode=true,name=until"`
	UntilID     *string                `queryParam:"style=form,explode=true,name=until_id"`
}

type GetPresencesRequest struct {
	QueryParams GetPresencesQueryParams
}

type GetPresences200ApplicationJSON struct {
	Count           *int64            `json:"count"`
	CountCurrent    *int64            `json:"count_current"`
	IsLimited       *bool             `json:"is_limited"`
	NextURL         *string           `json:"next_url"`
	QueryDurationMs *int64            `json:"query_duration_ms"`
	Results         []shared.Presence `json:"results"`
	URL             *string           `json:"url"`
}

type GetPresencesResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetPresences200ApplicationJSONObject *GetPresences200ApplicationJSON
}
