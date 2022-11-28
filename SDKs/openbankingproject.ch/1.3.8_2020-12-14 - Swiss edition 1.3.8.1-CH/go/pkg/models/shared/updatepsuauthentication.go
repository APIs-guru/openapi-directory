package shared

// UpdatePsuAuthentication
// Content of the body of a Update PSU authentication request
//
// Password subfield is used.
type UpdatePsuAuthentication struct {
	PsuData PsuData `json:"psuData"`
}
