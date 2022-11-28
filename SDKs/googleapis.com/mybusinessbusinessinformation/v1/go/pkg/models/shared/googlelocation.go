package shared

// GoogleLocation
// Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.
type GoogleLocation struct {
	Location              *Location `json:"location,omitempty"`
	Name                  *string   `json:"name,omitempty"`
	RequestAdminRightsURI *string   `json:"requestAdminRightsUri,omitempty"`
}
