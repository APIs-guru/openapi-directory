package shared

type NotificationTypeInfo struct {
	Category           *string `json:"Category"`
	Enabled            *bool   `json:"Enabled"`
	IsBasedOnUserEvent *bool   `json:"IsBasedOnUserEvent"`
	Name               *string `json:"Name"`
	Type               *string `json:"Type"`
}
