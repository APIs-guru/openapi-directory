package shared

// GoogleHomeEnterpriseSdmV1Room
// Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.
type GoogleHomeEnterpriseSdmV1Room struct {
	Name   *string                `json:"name,omitempty"`
	Traits map[string]interface{} `json:"traits,omitempty"`
}
