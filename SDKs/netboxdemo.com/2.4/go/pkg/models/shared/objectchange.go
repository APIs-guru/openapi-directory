package shared

import (
"time")

type ObjectChange struct {
    Action int64 `json:"action"`
    ChangedObject *string `json:"changed_object,omitempty"`
    ContentType *string `json:"content_type,omitempty"`
    ID *int64 `json:"id,omitempty"`
    ObjectData *string `json:"object_data,omitempty"`
    RequestID *string `json:"request_id,omitempty"`
    Time *time.Time `json:"time,omitempty"`
    User *NestedUser `json:"user,omitempty"`
    UserName *string `json:"user_name,omitempty"`
    
}

