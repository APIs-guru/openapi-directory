package operations

type GetInstancesIDFramesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDFramesRequest struct {
	PathParams GetInstancesIDFramesPathParams
}

type GetInstancesIDFramesResponse struct {
	ContentType                               string
	GetInstancesIDFrames200ApplicationJSONAny *interface{}
	StatusCode                                int64
}
