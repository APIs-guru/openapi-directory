package shared

import (
	"time"
)

type ObjectStorageBucket struct {
	Cluster  *string    `json:"cluster"`
	Created  *time.Time `json:"created"`
	Hostname *string    `json:"hostname"`
	Label    *string    `json:"label"`
	Objects  *int64     `json:"objects"`
	Size     *int64     `json:"size"`
}
