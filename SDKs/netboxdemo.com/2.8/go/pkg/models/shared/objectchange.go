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

type ObjectChangeAction struct {
	Label ObjectChangeActionLabelEnum `json:"label"`
	Value ObjectChangeActionValueEnum `json:"value"`
}

type ObjectChange struct {
	Action            *ObjectChangeAction `json:"action,omitempty"`
	ChangedObject     map[string]string   `json:"changed_object,omitempty"`
	ChangedObjectID   int64               `json:"changed_object_id"`
	ChangedObjectType *string             `json:"changed_object_type,omitempty"`
	ID                *int64              `json:"id,omitempty"`
	ObjectData        *string             `json:"object_data,omitempty"`
	RequestID         *string             `json:"request_id,omitempty"`
	Time              *time.Time          `json:"time,omitempty"`
	User              *NestedUser         `json:"user,omitempty"`
	UserName          *string             `json:"user_name,omitempty"`
}
