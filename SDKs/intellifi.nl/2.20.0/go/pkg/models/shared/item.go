package shared

type Item struct {
	CodeHex         *string                `json:"code_hex"`
	ConfigRequest   map[string]interface{} `json:"config_request"`
	Custom          *interface{}           `json:"custom"`
	GeoCoords       *GeoCoordsReadOnly     `json:"geo_coords"`
	ID              *string                `json:"id"`
	IsPresent       *bool                  `json:"is_present"`
	Label           *string                `json:"label"`
	LocationRequest *string                `json:"location_request"`
	Metadata        map[string]interface{} `json:"metadata"`
	MoveCount       *int64                 `json:"move_count"`
	Protocol        *ItemProtocolEnum      `json:"protocol"`
	Sets            []string               `json:"sets"`
	Technology      *TechnologyEnum        `json:"technology"`
	TimeCreated     *string                `json:"time_created"`
	TimeLastPresent *string                `json:"time_last_present"`
	TimeMoved       *string                `json:"time_moved"`
	TimeUpdated     *string                `json:"time_updated"`
	Type            *ItemTypeEnum          `json:"type"`
	URL             *string                `json:"url"`
}
