package shared

type PostenSatzEnum string

const (
	PostenSatzEnumNormal      PostenSatzEnum = "NORMAL"
	PostenSatzEnumErmaessigt1 PostenSatzEnum = "ERMAESSIGT1"
	PostenSatzEnumErmaessigt2 PostenSatzEnum = "ERMAESSIGT2"
	PostenSatzEnumBesonders   PostenSatzEnum = "BESONDERS"
	PostenSatzEnumNull        PostenSatzEnum = "NULL"
)

type Posten struct {
	Bezeichnung              string         `json:"Bezeichnung"`
	BruttoBetrag             int64          `json:"BruttoBetrag"`
	ExternerBelegBelegkreis  *string        `json:"Externer-Beleg-Belegkreis,omitempty"`
	ExternerBelegBezeichnung *string        `json:"Externer-Beleg-Bezeichnung,omitempty"`
	ExternerBelegReferenz    *string        `json:"Externer-Beleg-Referenz,omitempty"`
	Menge                    int64          `json:"Menge"`
	NettoBetrag              int64          `json:"NettoBetrag"`
	Satz                     PostenSatzEnum `json:"Satz"`
}
