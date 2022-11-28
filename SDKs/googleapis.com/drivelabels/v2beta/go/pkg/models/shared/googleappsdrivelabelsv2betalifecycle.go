package shared

type GoogleAppsDriveLabelsV2betaLifecycleStateEnum string

const (
	GoogleAppsDriveLabelsV2betaLifecycleStateEnumStateUnspecified GoogleAppsDriveLabelsV2betaLifecycleStateEnum = "STATE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaLifecycleStateEnumUnpublishedDraft GoogleAppsDriveLabelsV2betaLifecycleStateEnum = "UNPUBLISHED_DRAFT"
	GoogleAppsDriveLabelsV2betaLifecycleStateEnumPublished        GoogleAppsDriveLabelsV2betaLifecycleStateEnum = "PUBLISHED"
	GoogleAppsDriveLabelsV2betaLifecycleStateEnumDisabled         GoogleAppsDriveLabelsV2betaLifecycleStateEnum = "DISABLED"
	GoogleAppsDriveLabelsV2betaLifecycleStateEnumDeleted          GoogleAppsDriveLabelsV2betaLifecycleStateEnum = "DELETED"
)

// GoogleAppsDriveLabelsV2betaLifecycleInput
// The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
type GoogleAppsDriveLabelsV2betaLifecycleInput struct {
	DisabledPolicy *GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy `json:"disabledPolicy,omitempty"`
}

// GoogleAppsDriveLabelsV2betaLifecycle
// The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
type GoogleAppsDriveLabelsV2betaLifecycle struct {
	DisabledPolicy        *GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy `json:"disabledPolicy,omitempty"`
	HasUnpublishedChanges *bool                                               `json:"hasUnpublishedChanges,omitempty"`
	State                 *GoogleAppsDriveLabelsV2betaLifecycleStateEnum      `json:"state,omitempty"`
}
