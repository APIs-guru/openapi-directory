package operations

import (
	"openapi/pkg/models/shared"
)

type BranchControllerGetBranchesPathParams struct {
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type BranchControllerGetBranchesQueryParams struct {
	Count  int32 `queryParam:"style=form,explode=true,name=count"`
	Offset int32 `queryParam:"style=form,explode=true,name=offset"`
}

type BranchControllerGetBranchesRequest struct {
	PathParams  BranchControllerGetBranchesPathParams
	QueryParams BranchControllerGetBranchesQueryParams
}

type BranchControllerGetBranchesResponse struct {
	Body               []byte
	BranchModelResults *shared.BranchModelResults
	ContentType        string
	StatusCode         int64
}
