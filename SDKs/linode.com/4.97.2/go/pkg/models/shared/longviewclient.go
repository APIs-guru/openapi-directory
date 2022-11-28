package shared

import (
	"time"
)

// LongviewClientApps
// The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.
type LongviewClientApps struct {
	Apache *bool `json:"apache,omitempty"`
	Mysql  *bool `json:"mysql,omitempty"`
	Nginx  *bool `json:"nginx,omitempty"`
}

// LongviewClient
// A LongviewClient is a single monitor set up to track statistics about one of your servers.
type LongviewClient struct {
	APIKey      *string             `json:"api_key,omitempty"`
	Apps        *LongviewClientApps `json:"apps,omitempty"`
	Created     *time.Time          `json:"created,omitempty"`
	ID          *int64              `json:"id,omitempty"`
	InstallCode *string             `json:"install_code,omitempty"`
	Label       *string             `json:"label,omitempty"`
	Updated     *time.Time          `json:"updated,omitempty"`
}

// LongviewClientInput
// A LongviewClient is a single monitor set up to track statistics about one of your servers.
type LongviewClientInput struct {
	Label *string `json:"label,omitempty"`
}
