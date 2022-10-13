package shared

type InstancesListResponse struct {
	Items         []DatabaseInstance `json:"items"`
	Kind          *string            `json:"kind"`
	NextPageToken *string            `json:"nextPageToken"`
	Warnings      []APIWarning       `json:"warnings"`
}
