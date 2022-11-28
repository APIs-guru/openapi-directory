package shared

// Route
// The Route resource is the child of the PrivateConnection resource. It used to define a route for a PrivateConnection setup.
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
// The Route resource is the child of the PrivateConnection resource. It used to define a route for a PrivateConnection setup.
type RouteInput struct {
	DestinationAddress *string           `json:"destinationAddress,omitempty"`
	DestinationPort    *int32            `json:"destinationPort,omitempty"`
	DisplayName        *string           `json:"displayName,omitempty"`
	Labels             map[string]string `json:"labels,omitempty"`
}
