package shared

import (
	"time"
)

type LkeCluster struct {
	Created    *time.Time `json:"created"`
	ID         *int64     `json:"id"`
	K8sVersion *string    `json:"k8s_version"`
	Label      *string    `json:"label"`
	Region     *string    `json:"region"`
	Tags       []string   `json:"tags"`
	Updated    *time.Time `json:"updated"`
}
