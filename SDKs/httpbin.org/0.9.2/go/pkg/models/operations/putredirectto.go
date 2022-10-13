package operations

type PutRedirectToRequestBody struct {
	StatusCode *int64 `form:"name=status_code"`
	URL        string `form:"name=url"`
}

type PutRedirectToRequest struct {
	Request PutRedirectToRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type PutRedirectToResponse struct {
	ContentType string
	StatusCode  int64
}
