package shared

import (
	"time"
)

// BaseItem
// Class BaseItem.
type BaseItem struct {
	Container                *string    `json:"Container,omitempty"`
	DateLastSaved            *time.Time `json:"DateLastSaved,omitempty"`
	ExtraIds                 []string   `json:"ExtraIds,omitempty"`
	Height                   *int32     `json:"Height,omitempty"`
	IsHd                     *bool      `json:"IsHD,omitempty"`
	IsShortcut               *bool      `json:"IsShortcut,omitempty"`
	RemoteTrailers           []MediaURL `json:"RemoteTrailers,omitempty"`
	ShortcutPath             *string    `json:"ShortcutPath,omitempty"`
	Size                     *int64     `json:"Size,omitempty"`
	SupportsExternalTransfer *bool      `json:"SupportsExternalTransfer,omitempty"`
	Width                    *int32     `json:"Width,omitempty"`
}
