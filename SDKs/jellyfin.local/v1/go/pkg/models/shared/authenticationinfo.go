package shared

import (
	"time"
)

type AuthenticationInfo struct {
	AccessToken      *string    `json:"AccessToken"`
	AppName          *string    `json:"AppName"`
	AppVersion       *string    `json:"AppVersion"`
	DateCreated      *time.Time `json:"DateCreated"`
	DateLastActivity *time.Time `json:"DateLastActivity"`
	DateRevoked      *time.Time `json:"DateRevoked"`
	DeviceID         *string    `json:"DeviceId"`
	DeviceName       *string    `json:"DeviceName"`
	ID               *int64     `json:"Id"`
	IsActive         *bool      `json:"IsActive"`
	UserID           *string    `json:"UserId"`
	UserName         *string    `json:"UserName"`
}
