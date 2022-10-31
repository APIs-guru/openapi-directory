package shared

type StageReference struct {
	House *HouseEnum `json:"house,omitempty"`
	ID    *int32     `json:"id,omitempty"`
	Name  *string    `json:"name,omitempty"`
}
