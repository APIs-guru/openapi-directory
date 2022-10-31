package operations

type StreetsInAWardPathParams struct {
	Country  string `pathParam:"style=simple,explode=false,name=country"`
	District string `pathParam:"style=simple,explode=false,name=district"`
	Region   string `pathParam:"style=simple,explode=false,name=region"`
	Ward     string `pathParam:"style=simple,explode=false,name=ward"`
}

type StreetsInAWardRequest struct {
	PathParams StreetsInAWardPathParams
}

type StreetsInAWardResponse struct {
	ContentType string
	StatusCode  int64
}
