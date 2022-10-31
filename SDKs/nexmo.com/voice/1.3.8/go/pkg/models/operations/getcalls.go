package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCallsOrderEnum string

const (
	GetCallsOrderEnumAsc  GetCallsOrderEnum = "asc"
	GetCallsOrderEnumDesc GetCallsOrderEnum = "desc"
)

type GetCallsStatusEnum string

const (
	GetCallsStatusEnumStarted    GetCallsStatusEnum = "started"
	GetCallsStatusEnumRinging    GetCallsStatusEnum = "ringing"
	GetCallsStatusEnumAnswered   GetCallsStatusEnum = "answered"
	GetCallsStatusEnumMachine    GetCallsStatusEnum = "machine"
	GetCallsStatusEnumCompleted  GetCallsStatusEnum = "completed"
	GetCallsStatusEnumBusy       GetCallsStatusEnum = "busy"
	GetCallsStatusEnumCancelled  GetCallsStatusEnum = "cancelled"
	GetCallsStatusEnumFailed     GetCallsStatusEnum = "failed"
	GetCallsStatusEnumRejected   GetCallsStatusEnum = "rejected"
	GetCallsStatusEnumTimeout    GetCallsStatusEnum = "timeout"
	GetCallsStatusEnumUnanswered GetCallsStatusEnum = "unanswered"
)

type GetCallsQueryParams struct {
	ConversationUUID *string             `queryParam:"style=form,explode=true,name=conversation_uuid"`
	DateEnd          *time.Time          `queryParam:"style=form,explode=true,name=date_end"`
	DateStart        *time.Time          `queryParam:"style=form,explode=true,name=date_start"`
	Order            *GetCallsOrderEnum  `queryParam:"style=form,explode=true,name=order"`
	PageSize         *int64              `queryParam:"style=form,explode=true,name=page_size"`
	RecordIndex      *int64              `queryParam:"style=form,explode=true,name=record_index"`
	Status           *GetCallsStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetCallsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetCallsRequest struct {
	QueryParams GetCallsQueryParams
	Security    GetCallsSecurity
}

type GetCallsResponse struct {
	ContentType      string
	GetCallsResponse *shared.GetCallsResponse
	StatusCode       int64
}
