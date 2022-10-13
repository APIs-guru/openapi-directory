package shared

type VersionedResource struct {
	Resource map[string]interface{} `json:"resource"`
	Version  *string                `json:"version"`
}
