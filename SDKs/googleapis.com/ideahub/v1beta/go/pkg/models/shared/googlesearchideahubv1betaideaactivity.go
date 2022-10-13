package shared

type GoogleSearchIdeahubV1betaIdeaActivityTypeEnum string

const (
	GoogleSearchIdeahubV1betaIdeaActivityTypeEnumTypeUnspecified GoogleSearchIdeahubV1betaIdeaActivityTypeEnum = "TYPE_UNSPECIFIED"
	GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostDrafted     GoogleSearchIdeahubV1betaIdeaActivityTypeEnum = "POST_DRAFTED"
	GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostPublished   GoogleSearchIdeahubV1betaIdeaActivityTypeEnum = "POST_PUBLISHED"
	GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostDeleted     GoogleSearchIdeahubV1betaIdeaActivityTypeEnum = "POST_DELETED"
	GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostUnpublished GoogleSearchIdeahubV1betaIdeaActivityTypeEnum = "POST_UNPUBLISHED"
)

type GoogleSearchIdeahubV1betaIdeaActivity struct {
	Ideas  []string                                       `json:"ideas"`
	Name   *string                                        `json:"name"`
	Topics []string                                       `json:"topics"`
	Type   *GoogleSearchIdeahubV1betaIdeaActivityTypeEnum `json:"type"`
	URI    *string                                        `json:"uri"`
}
