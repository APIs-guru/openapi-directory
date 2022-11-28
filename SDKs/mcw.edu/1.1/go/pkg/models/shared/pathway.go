package shared

type Pathway struct {
	Description       *string
	HasAlteredPath    *string
	ID                *string
	Name              *string
	ObjectList        []PathwayObject
	PathwayCategories []string
	ReferenceList     []Reference
}
