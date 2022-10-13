package shared

type ListServicesResponseStatusEnum string

const (
	ListServicesResponseStatusEnumSuccess ListServicesResponseStatusEnum = "success"
)

type ListServicesResponse struct {
	API      string                         `json:"api"`
	Method   string                         `json:"method"`
	Response []ServiceDescription           `json:"response"`
	Status   ListServicesResponseStatusEnum `json:"status"`
}
