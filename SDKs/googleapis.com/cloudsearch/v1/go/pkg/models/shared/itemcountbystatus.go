package shared

type ItemCountByStatusStatusCodeEnum string

const (
	ItemCountByStatusStatusCodeEnumCodeUnspecified ItemCountByStatusStatusCodeEnum = "CODE_UNSPECIFIED"
	ItemCountByStatusStatusCodeEnumError           ItemCountByStatusStatusCodeEnum = "ERROR"
	ItemCountByStatusStatusCodeEnumModified        ItemCountByStatusStatusCodeEnum = "MODIFIED"
	ItemCountByStatusStatusCodeEnumNewItem         ItemCountByStatusStatusCodeEnum = "NEW_ITEM"
	ItemCountByStatusStatusCodeEnumAccepted        ItemCountByStatusStatusCodeEnum = "ACCEPTED"
)

type ItemCountByStatus struct {
	Count             *string                          `json:"count,omitempty"`
	IndexedItemsCount *string                          `json:"indexedItemsCount,omitempty"`
	StatusCode        *ItemCountByStatusStatusCodeEnum `json:"statusCode,omitempty"`
}
