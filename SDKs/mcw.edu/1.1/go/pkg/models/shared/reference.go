package shared

import (
	"time"
)

type Reference struct {
	Citation        *string
	Doi             *string
	Editors         *string
	Issue           *string
	Key             *int32
	Notes           *string
	Pages           *string
	PubDate         *time.Time
	PubStatus       *string
	Publication     *string
	Publisher       *string
	PublisherCity   *string
	RefAbstract     *string
	ReferenceType   *string
	RgdID           *int32
	SpeciesTypeKey  *int32
	Title           *string
	URLWebReference *string
	Volume          *string
}
