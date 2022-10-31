package shared



type ImageRegionProposal struct {
    ImageID *string `json:"imageId,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Proposals []RegionProposal `json:"proposals,omitempty"`
    
}

