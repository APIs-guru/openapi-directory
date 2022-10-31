package shared

type EntityChangeStatusEnum string

const (
	EntityChangeStatusEnumChangeStatusUnspecified EntityChangeStatusEnum = "changeStatusUnspecified"
	EntityChangeStatusEnumNone                    EntityChangeStatusEnum = "none"
	EntityChangeStatusEnumAdded                   EntityChangeStatusEnum = "added"
	EntityChangeStatusEnumDeleted                 EntityChangeStatusEnum = "deleted"
	EntityChangeStatusEnumUpdated                 EntityChangeStatusEnum = "updated"
)

type Entity struct {
	ChangeStatus *EntityChangeStatusEnum `json:"changeStatus,omitempty"`
	Client       *Client                 `json:"client,omitempty"`
	Folder       *Folder                 `json:"folder,omitempty"`
	Tag          *Tag                    `json:"tag,omitempty"`
	Trigger      *Trigger                `json:"trigger,omitempty"`
	Variable     *Variable               `json:"variable,omitempty"`
}
