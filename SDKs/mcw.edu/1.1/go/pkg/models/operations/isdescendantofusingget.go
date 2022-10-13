package operations

type IsDescendantOfUsingGetPathParams struct {
	AccId1 string `pathParam:"style=simple,explode=false,name=accId1"`
	AccId2 string `pathParam:"style=simple,explode=false,name=accId2"`
}

type IsDescendantOfUsingGetRequest struct {
	PathParams IsDescendantOfUsingGetPathParams
}

type IsDescendantOfUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
