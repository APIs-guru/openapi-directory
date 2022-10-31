package operations

type WardsInADistrictPathParams struct {
	Country  string `pathParam:"style=simple,explode=false,name=country"`
	District string `pathParam:"style=simple,explode=false,name=district"`
	Region   string `pathParam:"style=simple,explode=false,name=region"`
}

type WardsInADistrictRequest struct {
	PathParams WardsInADistrictPathParams
}

type WardsInADistrictResponse struct {
	ContentType string
	StatusCode  int64
}
