package shared

import (
	"time"
)

// ObjectStorageBucket
// An Object Storage Bucket. This should be accessed primarily through the S3 API; [click here for more information](https://docs.ceph.com/en/latest/radosgw/s3/#api).
type ObjectStorageBucket struct {
	Cluster  *string    `json:"cluster,omitempty"`
	Created  *time.Time `json:"created,omitempty"`
	Hostname *string    `json:"hostname,omitempty"`
	Label    *string    `json:"label,omitempty"`
	Objects  *int64     `json:"objects,omitempty"`
	Size     *int64     `json:"size,omitempty"`
}
