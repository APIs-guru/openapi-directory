package operations

type GetModalitiesIDConfigurationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetModalitiesIDConfigurationRequest struct {
	PathParams GetModalitiesIDConfigurationPathParams
}

type GetModalitiesIDConfigurationResponse struct {
	ContentType                                       string
	GetModalitiesIDConfiguration200ApplicationJSONAny *interface{}
	StatusCode                                        int64
}
