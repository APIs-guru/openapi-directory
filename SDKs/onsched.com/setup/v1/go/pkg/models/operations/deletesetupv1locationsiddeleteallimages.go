package operations

type DeleteSetupV1LocationsIDDeleteallimagesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSetupV1LocationsIDDeleteallimagesQueryParams struct {
	Uppercase *bool `queryParam:"style=form,explode=true,name=uppercase"`
}

type DeleteSetupV1LocationsIDDeleteallimagesRequest struct {
	PathParams  DeleteSetupV1LocationsIDDeleteallimagesPathParams
	QueryParams DeleteSetupV1LocationsIDDeleteallimagesQueryParams
}

type DeleteSetupV1LocationsIDDeleteallimagesResponse struct {
	ContentType                                                      string
	DeleteSetupV1LocationsIDDeleteallimages200ApplicationJSONBoolean *bool
	StatusCode                                                       int64
}
