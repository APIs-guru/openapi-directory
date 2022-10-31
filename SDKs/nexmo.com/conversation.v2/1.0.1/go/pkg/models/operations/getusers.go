package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersQueryParams struct {
	Cursor   *string           `queryParam:"style=form,explode=true,name=cursor"`
	Order    *shared.OrderEnum `queryParam:"style=form,explode=true,name=order"`
	PageSize *int64            `queryParam:"style=form,explode=true,name=page_size"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
}

type GetUsersResponse struct {
	ContentType                   string
	StatusCode                    int64
	GetUsers200ApplicationJSONAny *interface{}
}
