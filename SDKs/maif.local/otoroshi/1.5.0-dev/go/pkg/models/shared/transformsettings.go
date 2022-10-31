package shared

type TransformSettings struct {
	Location        interface{}     `json:"location"`
	MappingSettings MappingSettings `json:"mappingSettings"`
}
