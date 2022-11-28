package shared

// GoogleHomeEnterpriseSdmV1Structure
// Structure resource represents an instance of enterprise managed home or hotel room.
type GoogleHomeEnterpriseSdmV1Structure struct {
	Name   *string                `json:"name,omitempty"`
	Traits map[string]interface{} `json:"traits,omitempty"`
}
