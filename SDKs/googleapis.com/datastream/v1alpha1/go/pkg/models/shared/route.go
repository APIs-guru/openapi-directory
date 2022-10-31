package shared

type Route struct {
	CreateTime         *string           `json:"createTime,omitempty"`
	DestinationAddress *string           `json:"destinationAddress,omitempty"`
	DestinationPort    *int32            `json:"destinationPort,omitempty"`
	DisplayName        *string           `json:"displayName,omitempty"`
	Labels             map[string]string `json:"labels,omitempty"`
	Name               *string           `json:"name,omitempty"`
	UpdateTime         *string           `json:"updateTime,omitempty"`
}
