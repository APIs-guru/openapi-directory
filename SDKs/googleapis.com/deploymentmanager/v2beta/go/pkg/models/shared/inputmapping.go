package shared

type InputMappingLocationEnum string

const (
	InputMappingLocationEnumUnknown InputMappingLocationEnum = "UNKNOWN"
	InputMappingLocationEnumPath    InputMappingLocationEnum = "PATH"
	InputMappingLocationEnumQuery   InputMappingLocationEnum = "QUERY"
	InputMappingLocationEnumBody    InputMappingLocationEnum = "BODY"
	InputMappingLocationEnumHeader  InputMappingLocationEnum = "HEADER"
)

type InputMapping struct {
	FieldName   *string                   `json:"fieldName,omitempty"`
	Location    *InputMappingLocationEnum `json:"location,omitempty"`
	MethodMatch *string                   `json:"methodMatch,omitempty"`
	Value       *string                   `json:"value,omitempty"`
}
