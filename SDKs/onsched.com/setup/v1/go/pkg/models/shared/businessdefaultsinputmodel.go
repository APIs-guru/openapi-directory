package shared

type BusinessDefaultsInputModel struct {
	AutoUpdateCustomer   *bool `json:"autoUpdateCustomer"`
	BusinessNotification *bool `json:"businessNotification"`
	CustomerCity         *bool `json:"customerCity"`
	CustomerState        *bool `json:"customerState"`
	EmailInfo            *bool `json:"emailInfo"`
	EnableUtcTimezone    *bool `json:"enableUtcTimezone"`
}
