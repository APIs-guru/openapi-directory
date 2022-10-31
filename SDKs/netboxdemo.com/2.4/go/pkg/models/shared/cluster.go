package shared

import (
"time")

type Cluster struct {
    Comments *string `json:"comments,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    Group *NestedClusterGroup `json:"group,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Name string `json:"name"`
    Site *NestedSite `json:"site,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Type NestedClusterType `json:"type"`
    
}

