package shared

type TargetingTemplatesListResponse struct {
	Kind               *string             `json:"kind,omitempty"`
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	TargetingTemplates []TargetingTemplate `json:"targetingTemplates,omitempty"`
}
