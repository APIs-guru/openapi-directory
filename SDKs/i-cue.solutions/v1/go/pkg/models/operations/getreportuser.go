package operations

type GetReportUserHeaders struct {
	Token *string `header:"name=Token"`
}

type GetReportUserRequest struct {
	Headers GetReportUserHeaders
}

type GetReportUserResponse struct {
	ContentType string
	StatusCode  int64
}
