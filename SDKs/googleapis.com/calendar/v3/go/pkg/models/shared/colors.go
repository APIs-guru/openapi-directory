package shared

import (
	"time"
)

type Colors struct {
	Calendar map[string]ColorDefinition `json:"calendar"`
	Event    map[string]ColorDefinition `json:"event"`
	Kind     *string                    `json:"kind"`
	Updated  *time.Time                 `json:"updated"`
}
