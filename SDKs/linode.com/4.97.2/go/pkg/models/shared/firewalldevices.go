package shared

import (
	"time"
)

type FirewallDevicesEntityTypeEnum string

const (
	FirewallDevicesEntityTypeEnumLinode FirewallDevicesEntityTypeEnum = "linode"
)

type FirewallDevicesEntity struct {
	ID    *int64                         `json:"id"`
	Label *string                        `json:"label"`
	Type  *FirewallDevicesEntityTypeEnum `json:"type"`
	URL   *string                        `json:"url"`
}

type FirewallDevices struct {
	Created *time.Time             `json:"created"`
	Entity  *FirewallDevicesEntity `json:"entity"`
	ID      *int64                 `json:"id"`
	Updated *time.Time             `json:"updated"`
}
