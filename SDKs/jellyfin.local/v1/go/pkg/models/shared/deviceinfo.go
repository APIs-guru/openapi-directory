package shared

import (
	"time"
)

type DeviceInfo struct {
	AppName          *string             `json:"AppName"`
	AppVersion       *string             `json:"AppVersion"`
	Capabilities     *ClientCapabilities `json:"Capabilities"`
	DateLastActivity *time.Time          `json:"DateLastActivity"`
	IconURL          *string             `json:"IconUrl"`
	ID               *string             `json:"Id"`
	LastUserID       *string             `json:"LastUserId"`
	LastUserName     *string             `json:"LastUserName"`
	Name             *string             `json:"Name"`
}
