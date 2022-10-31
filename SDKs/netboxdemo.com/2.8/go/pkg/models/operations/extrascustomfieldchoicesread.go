package operations

type ExtrasCustomFieldChoicesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasCustomFieldChoicesReadRequest struct {
	PathParams ExtrasCustomFieldChoicesReadPathParams
}

type ExtrasCustomFieldChoicesReadResponse struct {
	ContentType string
	StatusCode  int64
}
