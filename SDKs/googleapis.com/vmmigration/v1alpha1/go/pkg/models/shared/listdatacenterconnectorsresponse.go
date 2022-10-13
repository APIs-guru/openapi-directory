package shared

type ListDatacenterConnectorsResponse struct {
	DatacenterConnectors []DatacenterConnector `json:"datacenterConnectors"`
	NextPageToken        *string               `json:"nextPageToken"`
	Unreachable          []string              `json:"unreachable"`
}
