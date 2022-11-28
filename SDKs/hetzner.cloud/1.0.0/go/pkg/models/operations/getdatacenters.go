package operations

type GetDatacentersQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type GetDatacenters200ApplicationJSONDatacentersLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

// GetDatacenters200ApplicationJSONDatacentersServerTypes
// The Server types the Datacenter can handle
type GetDatacenters200ApplicationJSONDatacentersServerTypes struct {
	Available             []float64 `json:"available"`
	AvailableForMigration []float64 `json:"available_for_migration"`
	Supported             []float64 `json:"supported"`
}

type GetDatacenters200ApplicationJSONDatacenters struct {
	Description string                                                 `json:"description"`
	ID          int64                                                  `json:"id"`
	Location    GetDatacenters200ApplicationJSONDatacentersLocation    `json:"location"`
	Name        string                                                 `json:"name"`
	ServerTypes GetDatacenters200ApplicationJSONDatacentersServerTypes `json:"server_types"`
}

type GetDatacenters200ApplicationJSON struct {
	Datacenters    []GetDatacenters200ApplicationJSONDatacenters `json:"datacenters"`
	Recommendation float64                                       `json:"recommendation"`
}

type GetDatacentersRequest struct {
	QueryParams GetDatacentersQueryParams
}

type GetDatacentersResponse struct {
	ContentType                            string
	GetDatacenters200ApplicationJSONObject *GetDatacenters200ApplicationJSON
	StatusCode                             int64
}
