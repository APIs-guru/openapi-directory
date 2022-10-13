package shared

type BillType struct {
	Category    *BillTypeCategoryEnum `json:"category"`
	Description *string               `json:"description"`
	ID          *int32                `json:"id"`
	Name        *string               `json:"name"`
}
