package operations

type GetForecastPointsPathParams struct {
	Language    string `pathParam:"style=simple,explode=false,name=language"`
	Yatchclubid string `pathParam:"style=simple,explode=false,name=yatchclubid"`
}

type GetForecastPointsRequest struct {
	PathParams GetForecastPointsPathParams
}

type GetForecastPointsResponse struct {
	ContentType string
	StatusCode  int64
}
