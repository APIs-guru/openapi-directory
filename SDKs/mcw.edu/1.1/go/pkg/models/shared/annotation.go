package shared

import (
	"time"
)

type Annotation struct {
	AnnotatedObjectRgdID *int32
	AnnotationExtension  *string
	Aspect               *string
	CreatedBy            *int32
	CreatedDate          *time.Time
	DataSrc              *string
	Evidence             *string
	GeneProductFormID    *string
	Key                  *int32
	LastModifiedBy       *int32
	LastModifiedDate     *time.Time
	Notes                *string
	ObjectName           *string
	ObjectSymbol         *string
	OriginalCreatedDate  *time.Time
	Qualifier            *string
	RefRgdID             *int32
	RelativeTo           *string
	RgdObjectKey         *int32
	SpeciesTypeKey       *int32
	Term                 *string
	TermAcc              *string
	WithInfo             *string
	XrefSource           *string
}
