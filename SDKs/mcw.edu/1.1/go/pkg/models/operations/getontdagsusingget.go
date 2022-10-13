package operations

type GetOntDagsUsingGetPathParams struct {
	AccID string `pathParam:"style=simple,explode=false,name=accId"`
}

type GetOntDagsUsingGetRequest struct {
	PathParams GetOntDagsUsingGetPathParams
}

type GetOntDagsUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
