package shared

type OsPolicyAssignmentRolloutStateEnum string

const (
	OsPolicyAssignmentRolloutStateEnumRolloutStateUnspecified OsPolicyAssignmentRolloutStateEnum = "ROLLOUT_STATE_UNSPECIFIED"
	OsPolicyAssignmentRolloutStateEnumInProgress              OsPolicyAssignmentRolloutStateEnum = "IN_PROGRESS"
	OsPolicyAssignmentRolloutStateEnumCancelling              OsPolicyAssignmentRolloutStateEnum = "CANCELLING"
	OsPolicyAssignmentRolloutStateEnumCancelled               OsPolicyAssignmentRolloutStateEnum = "CANCELLED"
	OsPolicyAssignmentRolloutStateEnumSucceeded               OsPolicyAssignmentRolloutStateEnum = "SUCCEEDED"
)

// OsPolicyAssignmentInput
// OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
type OsPolicyAssignmentInput struct {
	Description    *string                           `json:"description,omitempty"`
	Etag           *string                           `json:"etag,omitempty"`
	InstanceFilter *OsPolicyAssignmentInstanceFilter `json:"instanceFilter,omitempty"`
	Name           *string                           `json:"name,omitempty"`
	OsPolicies     []OsPolicy                        `json:"osPolicies,omitempty"`
	Rollout        *OsPolicyAssignmentRollout        `json:"rollout,omitempty"`
}

// OsPolicyAssignment
// OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
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
