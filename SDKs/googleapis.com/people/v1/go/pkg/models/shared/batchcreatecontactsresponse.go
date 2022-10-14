package shared

type BatchCreateContactsResponse struct {
	CreatedPeople []PersonResponse `json:"createdPeople,omitempty"`
}
