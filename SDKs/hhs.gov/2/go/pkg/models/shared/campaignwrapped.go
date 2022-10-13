package shared

type CampaignWrapped struct {
	Callback *string    `json:"callback"`
	Meta     *Meta      `json:"meta"`
	Results  []Campaign `json:"results"`
}
