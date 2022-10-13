package shared

type ImageRegionProposal struct {
	ImageID   *string          `json:"imageId"`
	ProjectID *string          `json:"projectId"`
	Proposals []RegionProposal `json:"proposals"`
}
