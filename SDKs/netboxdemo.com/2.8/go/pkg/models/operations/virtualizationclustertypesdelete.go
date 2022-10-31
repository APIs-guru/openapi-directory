package operations

type VirtualizationClusterTypesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type VirtualizationClusterTypesDeleteRequest struct {
	PathParams VirtualizationClusterTypesDeletePathParams
}

type VirtualizationClusterTypesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
