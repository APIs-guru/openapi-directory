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
	Baseline           *bool                               `json:"baseline"`
	Deleted            *bool                               `json:"deleted"`
	Description        *string                             `json:"description"`
	Etag               *string                             `json:"etag"`
	InstanceFilter     *OsPolicyAssignmentInstanceFilter   `json:"instanceFilter"`
	Name               *string                             `json:"name"`
	OsPolicies         []OsPolicy                          `json:"osPolicies"`
	Reconciling        *bool                               `json:"reconciling"`
	RevisionCreateTime *string                             `json:"revisionCreateTime"`
	RevisionID         *string                             `json:"revisionId"`
	Rollout            *OsPolicyAssignmentRollout          `json:"rollout"`
	RolloutState       *OsPolicyAssignmentRolloutStateEnum `json:"rolloutState"`
	UID                *string                             `json:"uid"`
}
