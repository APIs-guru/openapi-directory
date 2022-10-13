package shared

import (
	"time"
)

type ActionRevision struct {
	CreatedAt  time.Time                 `json:"createdAt"`
	Definition ExtensionActionDefinition `json:"definition"`
	ID         string                    `json:"id"`
	RevisionID string                    `json:"revisionId"`
}
