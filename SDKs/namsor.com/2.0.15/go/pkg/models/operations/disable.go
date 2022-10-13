package operations

type DisablePathParams struct {
	Disabled bool   `pathParam:"style=simple,explode=false,name=disabled"`
	Source   string `pathParam:"style=simple,explode=false,name=source"`
}

type DisableRequest struct {
	PathParams DisablePathParams
}

type DisableResponse struct {
	ContentType string
	StatusCode  int64
}
