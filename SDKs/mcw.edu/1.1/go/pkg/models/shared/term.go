package shared

import (
	"time"
)

type Term struct {
	AccID            *string
	Comment          *string
	CreatedBy        *string
	CreationDate     *time.Time
	Definition       *string
	ModificationDate *time.Time
	Obsolete         *int32
	OntologyID       *string
	Term             *string
	Xrefs            []TermXRef
}
