package shared

import (
	"time"
)

type CustomerPlanViewModel struct {
	Created        *time.Time `json:"created"`
	Description    *string    `json:"description"`
	ID             *string    `json:"id"`
	LocationID     *string    `json:"locationId"`
	Name           *string    `json:"name"`
	ObjectName     *string    `json:"objectName"`
	ServiceGroupID *string    `json:"serviceGroupId"`
	StripePlanID   *string    `json:"stripePlanId"`
	UID            *string    `json:"uid"`
}
