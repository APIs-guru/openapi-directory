package shared

type TargetingTemplatesListResponse struct {
	Kind               *string             `json:"kind"`
	NextPageToken      *string             `json:"nextPageToken"`
	TargetingTemplates []TargetingTemplate `json:"targetingTemplates"`
}
