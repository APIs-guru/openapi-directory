package shared



type SasPortalListNodesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Nodes []SasPortalNode `json:"nodes,omitempty"`
    
}

