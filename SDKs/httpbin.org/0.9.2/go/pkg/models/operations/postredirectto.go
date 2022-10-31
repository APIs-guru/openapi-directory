package operations

type PostRedirectToRequestBody struct {
	StatusCode *int64 `form:"name=status_code"`
	URL        string `form:"name=url"`
}

type PostRedirectToRequest struct {
	Request PostRedirectToRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type PostRedirectToResponse struct {
	ContentType string
	StatusCode  int64
}
