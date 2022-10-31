package shared



type ListUnmappedIdentitiesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    UnmappedIdentities []UnmappedIdentity `json:"unmappedIdentities,omitempty"`
    
}

