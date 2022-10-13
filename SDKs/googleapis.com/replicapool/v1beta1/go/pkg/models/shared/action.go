package shared

type Action struct {
	Commands            []string      `json:"commands"`
	EnvVariables        []EnvVariable `json:"envVariables"`
	TimeoutMilliSeconds *int32        `json:"timeoutMilliSeconds"`
}
