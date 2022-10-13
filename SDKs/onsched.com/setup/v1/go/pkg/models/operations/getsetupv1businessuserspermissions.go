package operations

type GetSetupV1BusinessusersPermissionsQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Role   *string `queryParam:"style=form,explode=true,name=role"`
}

type GetSetupV1BusinessusersPermissionsRequest struct {
	QueryParams GetSetupV1BusinessusersPermissionsQueryParams
}

type GetSetupV1BusinessusersPermissionsResponse struct {
	BusinessPermissionListViewModel map[string]interface{}
	ContentType                     string
	StatusCode                      int64
}
