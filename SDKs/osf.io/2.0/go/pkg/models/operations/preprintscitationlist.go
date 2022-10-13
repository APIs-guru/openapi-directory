package operations

type PreprintsCitationListPathParams struct {
	PreprintID string `pathParam:"style=simple,explode=false,name=preprint_id"`
}

type PreprintsCitationListRequest struct {
	PathParams PreprintsCitationListPathParams
}

type PreprintsCitationListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
