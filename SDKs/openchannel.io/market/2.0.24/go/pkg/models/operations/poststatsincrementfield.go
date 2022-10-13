package operations

type PostStatsIncrementFieldPathParams struct {
	Field string `pathParam:"style=simple,explode=false,name=field"`
}

type PostStatsIncrementFieldQueryParams struct {
	AppID  string  `queryParam:"style=form,explode=true,name=appId"`
	Date   *int64  `queryParam:"style=form,explode=true,name=date"`
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
	Value  *int64  `queryParam:"style=form,explode=true,name=value"`
}

type PostStatsIncrementFieldRequest struct {
	PathParams  PostStatsIncrementFieldPathParams
	QueryParams PostStatsIncrementFieldQueryParams
}

type PostStatsIncrementFieldResponse struct {
	ContentType string
	StatusCode  int64
}
