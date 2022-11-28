package operations

import (
	"openapi/pkg/models/shared"
)

type GetTicketsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetTicketsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetTickets200ApplicationJSON struct {
	Data    []shared.SupportTicket `json:"data,omitempty"`
	Page    *int64                 `json:"page,omitempty"`
	Pages   *int64                 `json:"pages,omitempty"`
	Results *int64                 `json:"results,omitempty"`
}

type GetTicketsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetTicketsRequest struct {
	QueryParams GetTicketsQueryParams
	Security    GetTicketsSecurity
}

type GetTicketsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetTickets200ApplicationJSONObject     *GetTickets200ApplicationJSON
	GetTicketsDefaultApplicationJSONObject *GetTicketsDefaultApplicationJSON
}
