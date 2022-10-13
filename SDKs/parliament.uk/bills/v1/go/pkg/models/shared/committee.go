package shared

type Committee struct {
	Category *string             `json:"category"`
	House    *CommitteeHouseEnum `json:"house"`
	ID       *int32              `json:"id"`
	Name     *string             `json:"name"`
	URL      *string             `json:"url"`
}
