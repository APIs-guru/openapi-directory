package shared

import (
"time")

type ObjectStorageBucket struct {
    Cluster *string `json:"cluster,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    Hostname *string `json:"hostname,omitempty"`
    Label *string `json:"label,omitempty"`
    Objects *int64 `json:"objects,omitempty"`
    Size *int64 `json:"size,omitempty"`
    
}

