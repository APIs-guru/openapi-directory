package shared

// UpdatePagePropertiesRequest
// Updates the properties of a Page.
type UpdatePagePropertiesRequest struct {
	Fields         *string         `json:"fields,omitempty"`
	ObjectID       *string         `json:"objectId,omitempty"`
	PageProperties *PageProperties `json:"pageProperties,omitempty"`
}
