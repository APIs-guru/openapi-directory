package operations

type DistrictsInARegionPathParams struct {
	Country string `pathParam:"style=simple,explode=false,name=country"`
	Region  string `pathParam:"style=simple,explode=false,name=region"`
}

type DistrictsInARegionRequest struct {
	PathParams DistrictsInARegionPathParams
}

type DistrictsInARegionResponse struct {
	ContentType string
	StatusCode  int64
}
