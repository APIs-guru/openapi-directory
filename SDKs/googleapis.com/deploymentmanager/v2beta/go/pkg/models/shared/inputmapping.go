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
	FieldName   *string                   `json:"fieldName"`
	Location    *InputMappingLocationEnum `json:"location"`
	MethodMatch *string                   `json:"methodMatch"`
	Value       *string                   `json:"value"`
}
