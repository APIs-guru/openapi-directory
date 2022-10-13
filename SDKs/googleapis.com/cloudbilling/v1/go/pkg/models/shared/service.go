package shared

type Service struct {
	BusinessEntityName *string `json:"businessEntityName"`
	DisplayName        *string `json:"displayName"`
	Name               *string `json:"name"`
	ServiceID          *string `json:"serviceId"`
}
