package shared

import (
	"time"
)

type DeviceInfo struct {
	AppName          *string             `json:"AppName,omitempty"`
	AppVersion       *string             `json:"AppVersion,omitempty"`
	Capabilities     *ClientCapabilities `json:"Capabilities,omitempty"`
	DateLastActivity *time.Time          `json:"DateLastActivity,omitempty"`
	IconURL          *string             `json:"IconUrl,omitempty"`
	ID               *string             `json:"Id,omitempty"`
	LastUserID       *string             `json:"LastUserId,omitempty"`
	LastUserName     *string             `json:"LastUserName,omitempty"`
	Name             *string             `json:"Name,omitempty"`
}
