package shared

type Category struct {
	DisplayName    *string         `json:"displayName"`
	MoreHoursTypes []MoreHoursType `json:"moreHoursTypes"`
	Name           *string         `json:"name"`
	ServiceTypes   []ServiceType   `json:"serviceTypes"`
}
