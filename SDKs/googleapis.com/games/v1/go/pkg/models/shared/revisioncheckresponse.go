package shared

type RevisionCheckResponseRevisionStatusEnum string

const (
	RevisionCheckResponseRevisionStatusEnumRevisionStatusUnspecified RevisionCheckResponseRevisionStatusEnum = "REVISION_STATUS_UNSPECIFIED"
	RevisionCheckResponseRevisionStatusEnumOk                        RevisionCheckResponseRevisionStatusEnum = "OK"
	RevisionCheckResponseRevisionStatusEnumDeprecated                RevisionCheckResponseRevisionStatusEnum = "DEPRECATED"
	RevisionCheckResponseRevisionStatusEnumInvalid                   RevisionCheckResponseRevisionStatusEnum = "INVALID"
)

type RevisionCheckResponse struct {
	APIVersion     *string                                  `json:"apiVersion,omitempty"`
	Kind           *string                                  `json:"kind,omitempty"`
	RevisionStatus *RevisionCheckResponseRevisionStatusEnum `json:"revisionStatus,omitempty"`
}
