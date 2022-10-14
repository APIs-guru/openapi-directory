package shared

type ListDatacenterConnectorsResponse struct {
	DatacenterConnectors []DatacenterConnector `json:"datacenterConnectors,omitempty"`
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	Unreachable          []string              `json:"unreachable,omitempty"`
}
