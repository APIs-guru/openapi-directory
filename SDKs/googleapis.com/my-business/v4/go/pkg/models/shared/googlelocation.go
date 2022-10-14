package shared

type GoogleLocation struct {
	Location              *Location `json:"location,omitempty"`
	Name                  *string   `json:"name,omitempty"`
	RequestAdminRightsURL *string   `json:"requestAdminRightsUrl,omitempty"`
}
