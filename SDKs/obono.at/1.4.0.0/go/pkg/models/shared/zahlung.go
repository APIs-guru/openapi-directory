package shared

type Zahlung struct {
	Betrag      int64   `json:"Betrag"`
	Bezeichnung string  `json:"Bezeichnung"`
	Referenz    *string `json:"Referenz"`
}
