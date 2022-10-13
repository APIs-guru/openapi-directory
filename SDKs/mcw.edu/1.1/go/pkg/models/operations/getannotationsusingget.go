package operations

type GetAnnotationsUsingGetPathParams struct {
	AccID           string `pathParam:"style=simple,explode=false,name=accId"`
	IncludeChildren bool   `pathParam:"style=simple,explode=false,name=includeChildren"`
	SpeciesTypeKey  int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetAnnotationsUsingGetRequest struct {
	PathParams GetAnnotationsUsingGetPathParams
}

type GetAnnotationsUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
