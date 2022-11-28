package shared

import (
	"time"
)

// ManagedContactPhone
// Information about how to reach this Contact by phone.
type ManagedContactPhone struct {
	Primary   *string `json:"primary,omitempty"`
	Secondary *string `json:"secondary,omitempty"`
}

// ManagedContact
// Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
type ManagedContact struct {
	Email   *string              `json:"email,omitempty"`
	Group   *string              `json:"group,omitempty"`
	ID      *int64               `json:"id,omitempty"`
	Name    *string              `json:"name,omitempty"`
	Phone   *ManagedContactPhone `json:"phone,omitempty"`
	Updated *time.Time           `json:"updated,omitempty"`
}

// ManagedContactInput
// Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
type ManagedContactInput struct {
	Email *string              `json:"email,omitempty"`
	Group *string              `json:"group,omitempty"`
	Name  *string              `json:"name,omitempty"`
	Phone *ManagedContactPhone `json:"phone,omitempty"`
}
