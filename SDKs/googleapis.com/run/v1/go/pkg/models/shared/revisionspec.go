package shared

type RevisionSpec struct {
	ContainerConcurrency *int32                 `json:"containerConcurrency"`
	Containers           []Container            `json:"containers"`
	EnableServiceLinks   *bool                  `json:"enableServiceLinks"`
	ImagePullSecrets     []LocalObjectReference `json:"imagePullSecrets"`
	ServiceAccountName   *string                `json:"serviceAccountName"`
	TimeoutSeconds       *int32                 `json:"timeoutSeconds"`
	Volumes              []Volume               `json:"volumes"`
}
