package shared

type DeleteTypeEnum string

const (
	DeleteTypeEnumTypeUnspecified DeleteTypeEnum = "TYPE_UNSPECIFIED"
	DeleteTypeEnumTrash           DeleteTypeEnum = "TRASH"
	DeleteTypeEnumPermanentDelete DeleteTypeEnum = "PERMANENT_DELETE"
)

// Delete
// An object was deleted.
type Delete struct {
	Type *DeleteTypeEnum `json:"type,omitempty"`
}
