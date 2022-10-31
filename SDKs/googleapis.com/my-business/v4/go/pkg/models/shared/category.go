package shared



type Category struct {
    CategoryID *string `json:"categoryId,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    MoreHoursTypes []MoreHoursType `json:"moreHoursTypes,omitempty"`
    ServiceTypes []ServiceType `json:"serviceTypes,omitempty"`
    
}

