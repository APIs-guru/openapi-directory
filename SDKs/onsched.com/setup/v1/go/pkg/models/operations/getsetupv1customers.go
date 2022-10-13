package operations

type GetSetupV1CustomersQueryParams struct {
	Deleted    *bool   `queryParam:"style=form,explode=true,name=deleted"`
	Email      *string `queryParam:"style=form,explode=true,name=email"`
	GroupID    *string `queryParam:"style=form,explode=true,name=groupId"`
	Lastname   *string `queryParam:"style=form,explode=true,name=lastname"`
	Limit      *int32  `queryParam:"style=form,explode=true,name=limit"`
	LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
	Offset     *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type GetSetupV1CustomersRequest struct {
	QueryParams GetSetupV1CustomersQueryParams
}

type GetSetupV1CustomersResponse struct {
	ContentType           string
	CustomerListViewModel map[string]interface{}
	StatusCode            int64
}
