package operations

type GetReportUserHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type GetReportUserRequest struct {
	Headers GetReportUserHeaders
}

type GetReportUserResponse struct {
	ContentType string
	StatusCode  int64
}
