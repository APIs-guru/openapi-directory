package shared

// VerificationSettings
// Settings to verify the value of JWT token fields
type VerificationSettings struct {
	Fields          map[string]string `json:"fields"`
	MappingSettings *MappingSettings  `json:"mappingSettings,omitempty"`
}
