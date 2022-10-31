package operations

type GetInstancesIDHeaderPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDHeaderQueryParams struct {
	Short    *bool `queryParam:"style=form,explode=true,name=short"`
	Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
}

type GetInstancesIDHeaderRequest struct {
	PathParams  GetInstancesIDHeaderPathParams
	QueryParams GetInstancesIDHeaderQueryParams
}

type GetInstancesIDHeaderResponse struct {
	ContentType                               string
	GetInstancesIDHeader200ApplicationJSONAny *interface{}
	StatusCode                                int64
}
