package shared

// RevisionSpec
// RevisionSpec holds the desired state of the Revision (from the client).
type RevisionSpec struct {
	ContainerConcurrency *int32                 `json:"containerConcurrency,omitempty"`
	Containers           []Container            `json:"containers,omitempty"`
	EnableServiceLinks   *bool                  `json:"enableServiceLinks,omitempty"`
	ImagePullSecrets     []LocalObjectReference `json:"imagePullSecrets,omitempty"`
	ServiceAccountName   *string                `json:"serviceAccountName,omitempty"`
	TimeoutSeconds       *int32                 `json:"timeoutSeconds,omitempty"`
	Volumes              []Volume               `json:"volumes,omitempty"`
}
