package shared

type Pipeline struct {
	Actions              []Action          `json:"actions"`
	EncryptedEnvironment *Secret           `json:"encryptedEnvironment"`
	Environment          map[string]string `json:"environment"`
	Resources            *Resources        `json:"resources"`
	Timeout              *string           `json:"timeout"`
}
