package operations

type GetQuestionsQueryParams struct {
	AppToken *string  `queryParam:"style=form,explode=true,name=app_token"`
	Limit    *float64 `queryParam:"style=form,explode=true,name=limit"`
	Offset   *float64 `queryParam:"style=form,explode=true,name=offset"`
	Query    string   `queryParam:"style=form,explode=true,name=query"`
}

type GetQuestionsHeaders struct {
	XAppToken *string `header:"style=simple,explode=false,name=X-App-Token"`
}

type GetQuestionsRequest struct {
	QueryParams GetQuestionsQueryParams
	Headers     GetQuestionsHeaders
}

type GetQuestionsResponse struct {
	ContentType string
	StatusCode  int64
}
