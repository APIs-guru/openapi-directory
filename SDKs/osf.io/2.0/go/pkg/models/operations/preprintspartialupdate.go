package operations

type PreprintsPartialUpdatePathParams struct {
	PreprintID string `pathParam:"style=simple,explode=false,name=preprint_id"`
}

type PreprintsPartialUpdateRequest struct {
	PathParams PreprintsPartialUpdatePathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PreprintsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
