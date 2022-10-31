package shared

type RabattSatzEnum string

const (
	RabattSatzEnumNormal      RabattSatzEnum = "NORMAL"
	RabattSatzEnumErmaessigt1 RabattSatzEnum = "ERMAESSIGT1"
	RabattSatzEnumErmaessigt2 RabattSatzEnum = "ERMAESSIGT2"
	RabattSatzEnumBesonders   RabattSatzEnum = "BESONDERS"
	RabattSatzEnumNull        RabattSatzEnum = "NULL"
)

type Rabatt struct {
	BetragBrutto int64           `json:"Betrag-Brutto"`
	BetragNetto  int64           `json:"Betrag-Netto"`
	Bezeichnung  string          `json:"Bezeichnung"`
	Satz         *RabattSatzEnum `json:"Satz,omitempty"`
}
