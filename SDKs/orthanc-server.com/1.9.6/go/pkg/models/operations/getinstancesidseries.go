package operations

type GetInstancesIDSeriesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDSeriesQueryParams struct {
	Full  *bool `queryParam:"style=form,explode=true,name=full"`
	Short *bool `queryParam:"style=form,explode=true,name=short"`
}

type GetInstancesIDSeriesRequest struct {
	PathParams  GetInstancesIDSeriesPathParams
	QueryParams GetInstancesIDSeriesQueryParams
}

type GetInstancesIDSeriesResponse struct {
	ContentType                               string
	GetInstancesIDSeries200ApplicationJSONAny *interface{}
	StatusCode                                int64
}
