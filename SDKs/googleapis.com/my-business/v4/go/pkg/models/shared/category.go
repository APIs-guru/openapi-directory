package shared

type Category struct {
	CategoryID     *string         `json:"categoryId"`
	DisplayName    *string         `json:"displayName"`
	MoreHoursTypes []MoreHoursType `json:"moreHoursTypes"`
	ServiceTypes   []ServiceType   `json:"serviceTypes"`
}
