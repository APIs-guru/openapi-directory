package shared

import (
	"time"
)

type LongviewClientApps struct {
	Apache *bool `json:"apache,omitempty"`
	Mysql  *bool `json:"mysql,omitempty"`
	Nginx  *bool `json:"nginx,omitempty"`
}

type LongviewClient struct {
	APIKey      *string             `json:"api_key,omitempty"`
	Apps        *LongviewClientApps `json:"apps,omitempty"`
	Created     *time.Time          `json:"created,omitempty"`
	ID          *int64              `json:"id,omitempty"`
	InstallCode *string             `json:"install_code,omitempty"`
	Label       *string             `json:"label,omitempty"`
	Updated     *time.Time          `json:"updated,omitempty"`
}
