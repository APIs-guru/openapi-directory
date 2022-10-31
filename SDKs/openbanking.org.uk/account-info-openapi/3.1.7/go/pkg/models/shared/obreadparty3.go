package shared



type ObReadParty3Data struct {
    Party []ObParty2 `json:"Party,omitempty"`
    
}

type ObReadParty3 struct {
    Data ObReadParty3Data `json:"Data"`
    Links *Links `json:"Links,omitempty"`
    Meta *Meta `json:"Meta,omitempty"`
    
}

