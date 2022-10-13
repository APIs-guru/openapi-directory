package shared

type SasPortalListNodesResponse struct {
	NextPageToken *string         `json:"nextPageToken"`
	Nodes         []SasPortalNode `json:"nodes"`
}
