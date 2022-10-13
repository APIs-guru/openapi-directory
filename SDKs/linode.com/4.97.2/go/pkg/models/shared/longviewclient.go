package shared

import (
	"time"
)

type LongviewClientApps struct {
	Apache *bool `json:"apache"`
	Mysql  *bool `json:"mysql"`
	Nginx  *bool `json:"nginx"`
}

type LongviewClient struct {
	APIKey      *string             `json:"api_key"`
	Apps        *LongviewClientApps `json:"apps"`
	Created     *time.Time          `json:"created"`
	ID          *int64              `json:"id"`
	InstallCode *string             `json:"install_code"`
	Label       *string             `json:"label"`
	Updated     *time.Time          `json:"updated"`
}
