package shared

type GetPeopleResponse struct {
	Responses []PersonResponse `json:"responses,omitempty"`
}
