package shared

// VersionedResource
// Resource representation as defined by the corresponding service providing the resource for a given API version.
type VersionedResource struct {
	Resource map[string]interface{} `json:"resource,omitempty"`
	Version  *string                `json:"version,omitempty"`
}
