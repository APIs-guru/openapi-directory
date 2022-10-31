package operations

type PostModalitiesIDStoreStraightPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostModalitiesIDStoreStraightRequest struct {
	PathParams PostModalitiesIDStoreStraightPathParams
	Request    []byte `request:"mediaType=application/dicom"`
}

type PostModalitiesIDStoreStraightResponse struct {
	ContentType                                        string
	PostModalitiesIDStoreStraight200ApplicationJSONAny *interface{}
	StatusCode                                         int64
}
