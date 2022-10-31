package shared

import (
"time")


type FirewallDevicesEntityTypeEnum string

const (
    FirewallDevicesEntityTypeEnumLinode FirewallDevicesEntityTypeEnum = "linode"
)


type FirewallDevicesEntity struct {
    ID *int64 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Type *FirewallDevicesEntityTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type FirewallDevices struct {
    Created *time.Time `json:"created,omitempty"`
    Entity *FirewallDevicesEntity `json:"entity,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    
}

