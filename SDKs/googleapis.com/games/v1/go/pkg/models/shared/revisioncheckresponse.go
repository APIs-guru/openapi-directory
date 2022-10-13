package shared

type RevisionCheckResponseRevisionStatusEnum string

const (
	RevisionCheckResponseRevisionStatusEnumRevisionStatusUnspecified RevisionCheckResponseRevisionStatusEnum = "REVISION_STATUS_UNSPECIFIED"
	RevisionCheckResponseRevisionStatusEnumOk                        RevisionCheckResponseRevisionStatusEnum = "OK"
	RevisionCheckResponseRevisionStatusEnumDeprecated                RevisionCheckResponseRevisionStatusEnum = "DEPRECATED"
	RevisionCheckResponseRevisionStatusEnumInvalid                   RevisionCheckResponseRevisionStatusEnum = "INVALID"
)

type RevisionCheckResponse struct {
	APIVersion     *string                                  `json:"apiVersion"`
	Kind           *string                                  `json:"kind"`
	RevisionStatus *RevisionCheckResponseRevisionStatusEnum `json:"revisionStatus"`
}
