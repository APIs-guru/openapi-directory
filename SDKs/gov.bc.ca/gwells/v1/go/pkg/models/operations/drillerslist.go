package operations

import (
	"openapi/pkg/models/shared"
)

type DrillersListQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset   *int64  `queryParam:"style=form,explode=true,name=offset"`
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Search   *string `queryParam:"style=form,explode=true,name=search"`
}

type DrillersListRequest struct {
	QueryParams DrillersListQueryParams
}

type DrillersListResponse struct {
	ContentType string
	PersonLists []shared.PersonList
	StatusCode  int64
}
