package shared

type GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum string

const (
	GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumTypeUnspecified GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum = "TYPE_UNSPECIFIED"
	GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumPostDrafted     GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum = "POST_DRAFTED"
	GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumPostPublished   GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum = "POST_PUBLISHED"
	GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumPostDeleted     GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum = "POST_DELETED"
	GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumPostUnpublished GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum = "POST_UNPUBLISHED"
)

// GoogleSearchIdeahubV1alphaIdeaActivity
// An idea activity entry.
type GoogleSearchIdeahubV1alphaIdeaActivity struct {
	Ideas  []string                                        `json:"ideas,omitempty"`
	Name   *string                                         `json:"name,omitempty"`
	Topics []string                                        `json:"topics,omitempty"`
	Type   *GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum `json:"type,omitempty"`
	URI    *string                                         `json:"uri,omitempty"`
}
