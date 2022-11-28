package shared

// TransformSettings
// Settings to transform a JWT token and its location
type TransformSettings struct {
	Location        interface{}     `json:"location"`
	MappingSettings MappingSettings `json:"mappingSettings"`
}
