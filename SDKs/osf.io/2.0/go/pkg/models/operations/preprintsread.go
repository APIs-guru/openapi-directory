package operations

type PreprintsReadPathParams struct {
	PreprintID string `pathParam:"style=simple,explode=false,name=preprint_id"`
}

type PreprintsReadRequest struct {
	PathParams PreprintsReadPathParams
}

type PreprintsReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
