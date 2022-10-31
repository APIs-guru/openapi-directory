package operations

type GetSetupV1ServicesIDResourcesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1ServicesIDResourcesQueryParams struct {
	GoogleAuthReturnURL  *string `queryParam:"style=form,explode=true,name=googleAuthReturnUrl"`
	Limit                *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset               *int32  `queryParam:"style=form,explode=true,name=offset"`
	OutlookAuthReturnURL *string `queryParam:"style=form,explode=true,name=outlookAuthReturnUrl"`
}

type GetSetupV1ServicesIDResourcesRequest struct {
	PathParams  GetSetupV1ServicesIDResourcesPathParams
	QueryParams GetSetupV1ServicesIDResourcesQueryParams
}

type GetSetupV1ServicesIDResourcesResponse struct {
	ContentType           string
	ResourceListViewModel map[string]interface{}
	StatusCode            int64
}
