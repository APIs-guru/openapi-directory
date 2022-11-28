package shared

// ListDelegatesResponse
// Response for the ListDelegates method.
type ListDelegatesResponse struct {
	Delegates []Delegate `json:"delegates,omitempty"`
}
