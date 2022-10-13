package operations

type GetAppsAppIDPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type GetAppsAppIDQueryParams struct {
	TrackViews *bool   `queryParam:"style=form,explode=true,name=trackViews"`
	UserID     *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetAppsAppIDRequest struct {
	PathParams  GetAppsAppIDPathParams
	QueryParams GetAppsAppIDQueryParams
}

type GetAppsAppIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
