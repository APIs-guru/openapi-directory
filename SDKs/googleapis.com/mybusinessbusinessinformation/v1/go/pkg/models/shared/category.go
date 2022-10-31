package shared

type Category struct {
	DisplayName    *string         `json:"displayName,omitempty"`
	MoreHoursTypes []MoreHoursType `json:"moreHoursTypes,omitempty"`
	Name           *string         `json:"name,omitempty"`
	ServiceTypes   []ServiceType   `json:"serviceTypes,omitempty"`
}
