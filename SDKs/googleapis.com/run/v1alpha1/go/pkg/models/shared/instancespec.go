package shared

type InstanceSpec struct {
	ActiveDeadlineSeconds         *string     `json:"activeDeadlineSeconds"`
	Containers                    []Container `json:"containers"`
	RestartPolicy                 *string     `json:"restartPolicy"`
	ServiceAccountName            *string     `json:"serviceAccountName"`
	TerminationGracePeriodSeconds *string     `json:"terminationGracePeriodSeconds"`
	Volumes                       []Volume    `json:"volumes"`
}
