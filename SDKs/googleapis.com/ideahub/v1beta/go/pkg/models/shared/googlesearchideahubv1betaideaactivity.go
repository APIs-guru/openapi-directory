package shared

type GoogleSearchIdeahubV1betaIdeaActivityTypeEnum string

const (
	GoogleSearchIdeahubV1betaIdeaActivityTypeEnumTypeUnspecified GoogleSearchIdeahubV1betaIdeaActivityTypeEnum = "TYPE_UNSPECIFIED"
	GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostDrafted     GoogleSearchIdeahubV1betaIdeaActivityTypeEnum = "POST_DRAFTED"
	GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostPublished   GoogleSearchIdeahubV1betaIdeaActivityTypeEnum = "POST_PUBLISHED"
	GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostDeleted     GoogleSearchIdeahubV1betaIdeaActivityTypeEnum = "POST_DELETED"
	GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostUnpublished GoogleSearchIdeahubV1betaIdeaActivityTypeEnum = "POST_UNPUBLISHED"
)

// GoogleSearchIdeahubV1betaIdeaActivity
// An idea activity entry.
type GoogleSearchIdeahubV1betaIdeaActivity struct {
	Ideas  []string                                       `json:"ideas,omitempty"`
	Name   *string                                        `json:"name,omitempty"`
	Topics []string                                       `json:"topics,omitempty"`
	Type   *GoogleSearchIdeahubV1betaIdeaActivityTypeEnum `json:"type,omitempty"`
	URI    *string                                        `json:"uri,omitempty"`
}
