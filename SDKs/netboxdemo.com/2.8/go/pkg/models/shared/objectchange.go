package shared

import (
	"time"
)

type ObjectChangeActionLabelEnum string

const (
	ObjectChangeActionLabelEnumCreated ObjectChangeActionLabelEnum = "Created"
	ObjectChangeActionLabelEnumUpdated ObjectChangeActionLabelEnum = "Updated"
	ObjectChangeActionLabelEnumDeleted ObjectChangeActionLabelEnum = "Deleted"
)

type ObjectChangeActionValueEnum string

const (
	ObjectChangeActionValueEnumCreate ObjectChangeActionValueEnum = "create"
	ObjectChangeActionValueEnumUpdate ObjectChangeActionValueEnum = "update"
	ObjectChangeActionValueEnumDelete ObjectChangeActionValueEnum = "delete"
)

type ObjectChangeActionAction struct {
	Label ObjectChangeActionLabelEnum `json:"label"`
	Value ObjectChangeActionValueEnum `json:"value"`
}

type ObjectChange struct {
	Action            *ObjectChangeActionAction `json:"action"`
	ChangedObject     map[string]string         `json:"changed_object"`
	ChangedObjectID   int64                     `json:"changed_object_id"`
	ChangedObjectType *string                   `json:"changed_object_type"`
	ID                *int64                    `json:"id"`
	ObjectData        *string                   `json:"object_data"`
	RequestID         *string                   `json:"request_id"`
	Time              *time.Time                `json:"time"`
	User              *NestedUser               `json:"user"`
	UserName          *string                   `json:"user_name"`
}
