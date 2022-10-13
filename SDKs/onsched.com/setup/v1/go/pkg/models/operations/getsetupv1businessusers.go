package operations

type GetSetupV1BusinessusersQueryParams struct {
	Email      *string `queryParam:"style=form,explode=true,name=email"`
	Limit      *int32  `queryParam:"style=form,explode=true,name=limit"`
	LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
	Offset     *int32  `queryParam:"style=form,explode=true,name=offset"`
	Role       *string `queryParam:"style=form,explode=true,name=role"`
}

type GetSetupV1BusinessusersRequest struct {
	QueryParams GetSetupV1BusinessusersQueryParams
}

type GetSetupV1BusinessusersResponse struct {
	BusinessUserListViewModel map[string]interface{}
	ContentType               string
	StatusCode                int64
}
