package shared

type WellTagSearch struct {
	OwnerFullName string `json:"owner_full_name"`
	WellTagNumber *int64 `json:"well_tag_number,omitempty"`
}
