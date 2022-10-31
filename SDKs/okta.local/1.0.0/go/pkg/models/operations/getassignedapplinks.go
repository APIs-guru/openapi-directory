package operations

type GetAssignedAppLinksPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetAssignedAppLinksRequest struct {
	PathParams GetAssignedAppLinksPathParams
	Request    []byte `request:"mediaType=application/octet-stream"`
}

type GetAssignedAppLinksResponse struct {
	ContentType string
	StatusCode  int64
}
