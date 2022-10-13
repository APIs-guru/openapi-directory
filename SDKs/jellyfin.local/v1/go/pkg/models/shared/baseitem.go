package shared

import (
	"time"
)

type BaseItem struct {
	Container                *string    `json:"Container"`
	DateLastSaved            *time.Time `json:"DateLastSaved"`
	ExtraIds                 []string   `json:"ExtraIds"`
	Height                   *int32     `json:"Height"`
	IsHd                     *bool      `json:"IsHD"`
	IsShortcut               *bool      `json:"IsShortcut"`
	RemoteTrailers           []MediaURL `json:"RemoteTrailers"`
	ShortcutPath             *string    `json:"ShortcutPath"`
	Size                     *int64     `json:"Size"`
	SupportsExternalTransfer *bool      `json:"SupportsExternalTransfer"`
	Width                    *int32     `json:"Width"`
}
