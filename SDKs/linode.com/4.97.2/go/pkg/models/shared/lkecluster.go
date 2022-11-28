package shared

import (
	"time"
)

// LkeCluster
// A Kubernetes cluster.
type LkeCluster struct {
	Created    *time.Time `json:"created,omitempty"`
	ID         *int64     `json:"id,omitempty"`
	K8sVersion *string    `json:"k8s_version,omitempty"`
	Label      *string    `json:"label,omitempty"`
	Region     *string    `json:"region,omitempty"`
	Tags       []string   `json:"tags,omitempty"`
	Updated    *time.Time `json:"updated,omitempty"`
}
