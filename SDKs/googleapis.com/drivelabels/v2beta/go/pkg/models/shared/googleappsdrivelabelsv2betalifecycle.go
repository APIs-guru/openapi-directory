package shared

type GoogleAppsDriveLabelsV2betaLifecycleStateEnum string

const (
	GoogleAppsDriveLabelsV2betaLifecycleStateEnumStateUnspecified GoogleAppsDriveLabelsV2betaLifecycleStateEnum = "STATE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaLifecycleStateEnumUnpublishedDraft GoogleAppsDriveLabelsV2betaLifecycleStateEnum = "UNPUBLISHED_DRAFT"
	GoogleAppsDriveLabelsV2betaLifecycleStateEnumPublished        GoogleAppsDriveLabelsV2betaLifecycleStateEnum = "PUBLISHED"
	GoogleAppsDriveLabelsV2betaLifecycleStateEnumDisabled         GoogleAppsDriveLabelsV2betaLifecycleStateEnum = "DISABLED"
	GoogleAppsDriveLabelsV2betaLifecycleStateEnumDeleted          GoogleAppsDriveLabelsV2betaLifecycleStateEnum = "DELETED"
)

type GoogleAppsDriveLabelsV2betaLifecycle struct {
	DisabledPolicy        *GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy `json:"disabledPolicy,omitempty"`
	HasUnpublishedChanges *bool                                               `json:"hasUnpublishedChanges,omitempty"`
	State                 *GoogleAppsDriveLabelsV2betaLifecycleStateEnum      `json:"state,omitempty"`
}
