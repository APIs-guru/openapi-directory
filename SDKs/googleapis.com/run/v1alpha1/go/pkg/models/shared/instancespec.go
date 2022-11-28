package shared

// InstanceSpec
// InstanceSpec is a description of an instance.
type InstanceSpec struct {
	ActiveDeadlineSeconds         *string     `json:"activeDeadlineSeconds,omitempty"`
	Containers                    []Container `json:"containers,omitempty"`
	RestartPolicy                 *string     `json:"restartPolicy,omitempty"`
	ServiceAccountName            *string     `json:"serviceAccountName,omitempty"`
	TerminationGracePeriodSeconds *string     `json:"terminationGracePeriodSeconds,omitempty"`
	Volumes                       []Volume    `json:"volumes,omitempty"`
}
