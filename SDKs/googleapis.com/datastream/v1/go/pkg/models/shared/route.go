package shared

// Route
// The route resource is the child of the private connection resource, used for defining a route for a private connection.
type Route struct {
	CreateTime         *string           `json:"createTime,omitempty"`
	DestinationAddress *string           `json:"destinationAddress,omitempty"`
	DestinationPort    *int32            `json:"destinationPort,omitempty"`
	DisplayName        *string           `json:"displayName,omitempty"`
	Labels             map[string]string `json:"labels,omitempty"`
	Name               *string           `json:"name,omitempty"`
	UpdateTime         *string           `json:"updateTime,omitempty"`
}

// RouteInput
// The route resource is the child of the private connection resource, used for defining a route for a private connection.
type RouteInput struct {
	DestinationAddress *string           `json:"destinationAddress,omitempty"`
	DestinationPort    *int32            `json:"destinationPort,omitempty"`
	DisplayName        *string           `json:"displayName,omitempty"`
	Labels             map[string]string `json:"labels,omitempty"`
}
