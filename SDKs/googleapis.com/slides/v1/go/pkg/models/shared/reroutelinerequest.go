package shared

// RerouteLineRequest
// Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.
type RerouteLineRequest struct {
	ObjectID *string `json:"objectId,omitempty"`
}
