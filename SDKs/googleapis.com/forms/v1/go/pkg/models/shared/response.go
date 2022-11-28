package shared

// Response
// A single response from an update.
type Response struct {
	CreateItem *CreateItemResponse `json:"createItem,omitempty"`
}
