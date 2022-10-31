package shared

import (
	"time"
)

type Colors struct {
	Calendar map[string]ColorDefinition `json:"calendar,omitempty"`
	Event    map[string]ColorDefinition `json:"event,omitempty"`
	Kind     *string                    `json:"kind,omitempty"`
	Updated  *time.Time                 `json:"updated,omitempty"`
}
