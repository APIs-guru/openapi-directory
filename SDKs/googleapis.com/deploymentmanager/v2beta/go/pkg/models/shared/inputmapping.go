package shared

type InputMappingLocationEnum string

const (
	InputMappingLocationEnumUnknown InputMappingLocationEnum = "UNKNOWN"
	InputMappingLocationEnumPath    InputMappingLocationEnum = "PATH"
	InputMappingLocationEnumQuery   InputMappingLocationEnum = "QUERY"
	InputMappingLocationEnumBody    InputMappingLocationEnum = "BODY"
	InputMappingLocationEnumHeader  InputMappingLocationEnum = "HEADER"
)

// InputMapping
// InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.
type InputMapping struct {
	FieldName   *string                   `json:"fieldName,omitempty"`
	Location    *InputMappingLocationEnum `json:"location,omitempty"`
	MethodMatch *string                   `json:"methodMatch,omitempty"`
	Value       *string                   `json:"value,omitempty"`
}
