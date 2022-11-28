package shared

import (
	"time"
)

// ActionRevision
// A revision of this custom action.
type ActionRevision struct {
	CreatedAt  time.Time                 `json:"createdAt"`
	Definition ExtensionActionDefinition `json:"definition"`
	ID         string                    `json:"id"`
	RevisionID string                    `json:"revisionId"`
}
