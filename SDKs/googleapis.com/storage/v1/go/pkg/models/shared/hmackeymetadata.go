package shared

import (
	"time"
)

type HmacKeyMetadata struct {
	AccessID            *string    `json:"accessId"`
	Etag                *string    `json:"etag"`
	ID                  *string    `json:"id"`
	Kind                *string    `json:"kind"`
	ProjectID           *string    `json:"projectId"`
	SelfLink            *string    `json:"selfLink"`
	ServiceAccountEmail *string    `json:"serviceAccountEmail"`
	State               *string    `json:"state"`
	TimeCreated         *time.Time `json:"timeCreated"`
	Updated             *time.Time `json:"updated"`
}
