package shared

type Route struct {
	CreateTime         *string           `json:"createTime"`
	DestinationAddress *string           `json:"destinationAddress"`
	DestinationPort    *int32            `json:"destinationPort"`
	DisplayName        *string           `json:"displayName"`
	Labels             map[string]string `json:"labels"`
	Name               *string           `json:"name"`
	UpdateTime         *string           `json:"updateTime"`
}
