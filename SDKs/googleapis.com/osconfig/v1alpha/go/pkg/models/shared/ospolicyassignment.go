package shared

type OsPolicyAssignmentRolloutStateEnum string

const (
	OsPolicyAssignmentRolloutStateEnumRolloutStateUnspecified OsPolicyAssignmentRolloutStateEnum = "ROLLOUT_STATE_UNSPECIFIED"
	OsPolicyAssignmentRolloutStateEnumInProgress              OsPolicyAssignmentRolloutStateEnum = "IN_PROGRESS"
	OsPolicyAssignmentRolloutStateEnumCancelling              OsPolicyAssignmentRolloutStateEnum = "CANCELLING"
	OsPolicyAssignmentRolloutStateEnumCancelled               OsPolicyAssignmentRolloutStateEnum = "CANCELLED"
	OsPolicyAssignmentRolloutStateEnumSucceeded               OsPolicyAssignmentRolloutStateEnum = "SUCCEEDED"
)

type OsPolicyAssignment struct {
	Baseline           *bool                               `json:"baseline,omitempty"`
	Deleted            *bool                               `json:"deleted,omitempty"`
	Description        *string                             `json:"description,omitempty"`
	Etag               *string                             `json:"etag,omitempty"`
	InstanceFilter     *OsPolicyAssignmentInstanceFilter   `json:"instanceFilter,omitempty"`
	Name               *string                             `json:"name,omitempty"`
	OsPolicies         []OsPolicy                          `json:"osPolicies,omitempty"`
	Reconciling        *bool                               `json:"reconciling,omitempty"`
	RevisionCreateTime *string                             `json:"revisionCreateTime,omitempty"`
	RevisionID         *string                             `json:"revisionId,omitempty"`
	Rollout            *OsPolicyAssignmentRollout          `json:"rollout,omitempty"`
	RolloutState       *OsPolicyAssignmentRolloutStateEnum `json:"rolloutState,omitempty"`
	UID                *string                             `json:"uid,omitempty"`
}
