package shared

import (
	"time"
)

type ManagedContactPhone struct {
	Primary   *string `json:"primary"`
	Secondary *string `json:"secondary"`
}

type ManagedContact struct {
	Email   *string              `json:"email"`
	Group   *string              `json:"group"`
	ID      *int64               `json:"id"`
	Name    *string              `json:"name"`
	Phone   *ManagedContactPhone `json:"phone"`
	Updated *time.Time           `json:"updated"`
}
