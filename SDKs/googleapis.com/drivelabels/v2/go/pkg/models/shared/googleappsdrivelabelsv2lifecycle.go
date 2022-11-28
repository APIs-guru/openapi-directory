package shared

type GoogleAppsDriveLabelsV2LifecycleStateEnum string

const (
	GoogleAppsDriveLabelsV2LifecycleStateEnumStateUnspecified GoogleAppsDriveLabelsV2LifecycleStateEnum = "STATE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2LifecycleStateEnumUnpublishedDraft GoogleAppsDriveLabelsV2LifecycleStateEnum = "UNPUBLISHED_DRAFT"
	GoogleAppsDriveLabelsV2LifecycleStateEnumPublished        GoogleAppsDriveLabelsV2LifecycleStateEnum = "PUBLISHED"
	GoogleAppsDriveLabelsV2LifecycleStateEnumDisabled         GoogleAppsDriveLabelsV2LifecycleStateEnum = "DISABLED"
	GoogleAppsDriveLabelsV2LifecycleStateEnumDeleted          GoogleAppsDriveLabelsV2LifecycleStateEnum = "DELETED"
)

// GoogleAppsDriveLabelsV2Lifecycle
// The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
type GoogleAppsDriveLabelsV2Lifecycle struct {
	DisabledPolicy        *GoogleAppsDriveLabelsV2LifecycleDisabledPolicy `json:"disabledPolicy,omitempty"`
	HasUnpublishedChanges *bool                                           `json:"hasUnpublishedChanges,omitempty"`
	State                 *GoogleAppsDriveLabelsV2LifecycleStateEnum      `json:"state,omitempty"`
}
