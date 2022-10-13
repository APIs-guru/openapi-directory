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
	ChangeStatus *EntityChangeStatusEnum `json:"changeStatus"`
	Client       *Client                 `json:"client"`
	Folder       *Folder                 `json:"folder"`
	Tag          *Tag                    `json:"tag"`
	Trigger      *Trigger                `json:"trigger"`
	Variable     *Variable               `json:"variable"`
}
