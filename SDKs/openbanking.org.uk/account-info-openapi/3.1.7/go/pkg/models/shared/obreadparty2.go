package shared

type ObReadParty2Data struct {
	Party *ObParty2 `json:"Party"`
}

type ObReadParty2 struct {
	Data  ObReadParty2Data `json:"Data"`
	Links *Links           `json:"Links"`
	Meta  *Meta            `json:"Meta"`
}
