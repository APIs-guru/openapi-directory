package shared

type EntityChangeStatusEnum string

const (
	EntityChangeStatusEnumChangeStatusUnspecified EntityChangeStatusEnum = "changeStatusUnspecified"
	EntityChangeStatusEnumNone                    EntityChangeStatusEnum = "none"
	EntityChangeStatusEnumAdded                   EntityChangeStatusEnum = "added"
	EntityChangeStatusEnumDeleted                 EntityChangeStatusEnum = "deleted"
	EntityChangeStatusEnumUpdated                 EntityChangeStatusEnum = "updated"
)

// Entity
// A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
type Entity struct {
	ChangeStatus *EntityChangeStatusEnum `json:"changeStatus,omitempty"`
	Client       *Client                 `json:"client,omitempty"`
	Folder       *Folder                 `json:"folder,omitempty"`
	Tag          *Tag                    `json:"tag,omitempty"`
	Trigger      *Trigger                `json:"trigger,omitempty"`
	Variable     *Variable               `json:"variable,omitempty"`
}
