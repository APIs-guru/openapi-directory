package operations

type GetAnnotationCountByAccIDAndSpeciesUsingGetPathParams struct {
	AccID           string `pathParam:"style=simple,explode=false,name=accId"`
	IncludeChildren bool   `pathParam:"style=simple,explode=false,name=includeChildren"`
	SpeciesTypeKey  int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetAnnotationCountByAccIDAndSpeciesUsingGetRequest struct {
	PathParams GetAnnotationCountByAccIDAndSpeciesUsingGetPathParams
}

type GetAnnotationCountByAccIDAndSpeciesUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
