package operations

type GetPeersIDConfigurationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPeersIDConfigurationRequest struct {
	PathParams GetPeersIDConfigurationPathParams
}

type GetPeersIDConfigurationResponse struct {
	ContentType                                  string
	GetPeersIDConfiguration200ApplicationJSONAny *interface{}
	StatusCode                                   int64
}
