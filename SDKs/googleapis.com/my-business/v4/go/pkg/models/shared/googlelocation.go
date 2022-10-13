package shared

type GoogleLocation struct {
	Location              *Location `json:"location"`
	Name                  *string   `json:"name"`
	RequestAdminRightsURL *string   `json:"requestAdminRightsUrl"`
}
