package shared

type GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum string

const (
	GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumTypeUnspecified GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum = "TYPE_UNSPECIFIED"
	GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumPostDrafted     GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum = "POST_DRAFTED"
	GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumPostPublished   GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum = "POST_PUBLISHED"
	GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumPostDeleted     GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum = "POST_DELETED"
	GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumPostUnpublished GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum = "POST_UNPUBLISHED"
)

type GoogleSearchIdeahubV1alphaIdeaActivity struct {
	Ideas  []string                                        `json:"ideas"`
	Name   *string                                         `json:"name"`
	Topics []string                                        `json:"topics"`
	Type   *GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum `json:"type"`
	URI    *string                                         `json:"uri"`
}
