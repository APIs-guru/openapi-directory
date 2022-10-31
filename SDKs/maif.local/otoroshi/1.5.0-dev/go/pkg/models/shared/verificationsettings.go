package shared

type VerificationSettings struct {
	Fields          map[string]string `json:"fields"`
	MappingSettings *MappingSettings  `json:"mappingSettings,omitempty"`
}
