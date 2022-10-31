package shared




type GoogleAppsDriveLabelsV2LifecycleStateEnum string

const (
    GoogleAppsDriveLabelsV2LifecycleStateEnumStateUnspecified GoogleAppsDriveLabelsV2LifecycleStateEnum = "STATE_UNSPECIFIED"
GoogleAppsDriveLabelsV2LifecycleStateEnumUnpublishedDraft GoogleAppsDriveLabelsV2LifecycleStateEnum = "UNPUBLISHED_DRAFT"
GoogleAppsDriveLabelsV2LifecycleStateEnumPublished GoogleAppsDriveLabelsV2LifecycleStateEnum = "PUBLISHED"
GoogleAppsDriveLabelsV2LifecycleStateEnumDisabled GoogleAppsDriveLabelsV2LifecycleStateEnum = "DISABLED"
GoogleAppsDriveLabelsV2LifecycleStateEnumDeleted GoogleAppsDriveLabelsV2LifecycleStateEnum = "DELETED"
)


type GoogleAppsDriveLabelsV2Lifecycle struct {
    DisabledPolicy *GoogleAppsDriveLabelsV2LifecycleDisabledPolicy `json:"disabledPolicy,omitempty"`
    HasUnpublishedChanges *bool `json:"hasUnpublishedChanges,omitempty"`
    State *GoogleAppsDriveLabelsV2LifecycleStateEnum `json:"state,omitempty"`
    
}

