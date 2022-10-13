package operations

import (
	"openapi/pkg/models/shared"
)

type GetTicketRepliesPathParams struct {
	TicketID int64 `pathParam:"style=simple,explode=false,name=ticketId"`
}

type GetTicketRepliesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetTicketRepliesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetTicketRepliesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetTicketRepliesSecurity struct {
	Option1 *GetTicketRepliesSecurityOption1 `security:"option"`
	Option2 *GetTicketRepliesSecurityOption2 `security:"option"`
}

type GetTicketRepliesRequest struct {
	PathParams  GetTicketRepliesPathParams
	QueryParams GetTicketRepliesQueryParams
	Security    GetTicketRepliesSecurity
}

type GetTicketReplies200ApplicationJSON struct {
	Data    []shared.SupportTicketReply `json:"data"`
	Page    *int64                      `json:"page"`
	Pages   *int64                      `json:"pages"`
	Results *int64                      `json:"results"`
}

type GetTicketRepliesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetTicketRepliesResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetTicketReplies200ApplicationJSONObject     *GetTicketReplies200ApplicationJSON
	GetTicketRepliesDefaultApplicationJSONObject *GetTicketRepliesDefaultApplicationJSON
}
