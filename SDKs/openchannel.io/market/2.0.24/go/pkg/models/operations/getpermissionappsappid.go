package operations

type GetPermissionAppsAppIDPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type GetPermissionAppsAppIDQueryParams struct {
	UserID string `queryParam:"style=form,explode=true,name=userId"`
}

type GetPermissionAppsAppIDRequest struct {
	PathParams  GetPermissionAppsAppIDPathParams
	QueryParams GetPermissionAppsAppIDQueryParams
}

type GetPermissionAppsAppIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
