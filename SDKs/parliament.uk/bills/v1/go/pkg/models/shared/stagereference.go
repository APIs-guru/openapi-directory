package shared

type StageReference struct {
	House *HouseEnum `json:"house"`
	ID    *int32     `json:"id"`
	Name  *string    `json:"name"`
}
