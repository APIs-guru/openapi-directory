package shared

import (
	"time"
)

type ObjectChange struct {
	Action        int64       `json:"action"`
	ChangedObject *string     `json:"changed_object"`
	ContentType   *string     `json:"content_type"`
	ID            *int64      `json:"id"`
	ObjectData    *string     `json:"object_data"`
	RequestID     *string     `json:"request_id"`
	Time          *time.Time  `json:"time"`
	User          *NestedUser `json:"user"`
	UserName      *string     `json:"user_name"`
}
