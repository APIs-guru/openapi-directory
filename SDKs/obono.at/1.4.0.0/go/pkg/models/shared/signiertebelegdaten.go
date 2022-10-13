package shared

type SignierteBelegdatenUnternehmenIDTypEnum string

const (
	SignierteBelegdatenUnternehmenIDTypEnumSteuernummer SignierteBelegdatenUnternehmenIDTypEnum = "steuernummer"
	SignierteBelegdatenUnternehmenIDTypEnumUID          SignierteBelegdatenUnternehmenIDTypEnum = "uid"
	SignierteBelegdatenUnternehmenIDTypEnumGln          SignierteBelegdatenUnternehmenIDTypEnum = "gln"
)

type SignierteBelegdaten struct {
	BelegDatumUhrzeit           *string                                  `json:"Beleg-Datum-Uhrzeit"`
	Belegnummer                 *string                                  `json:"Belegnummer"`
	BetragBrutto                *int64                                   `json:"Betrag-Brutto"`
	BetragNetto                 *int64                                   `json:"Betrag-Netto"`
	BetragSatzBesondersBrutto   *int64                                   `json:"Betrag-Satz-Besonders-Brutto"`
	BetragSatzBesondersNetto    *int64                                   `json:"Betrag-Satz-Besonders-Netto"`
	BetragSatzErmaessigt1Brutto *int64                                   `json:"Betrag-Satz-Ermaessigt-1-Brutto"`
	BetragSatzErmaessigt1Netto  *int64                                   `json:"Betrag-Satz-Ermaessigt-1-Netto"`
	BetragSatzErmaessigt2Brutto *int64                                   `json:"Betrag-Satz-Ermaessigt-2-Brutto"`
	BetragSatzErmaessigt2Netto  *int64                                   `json:"Betrag-Satz-Ermaessigt-2-Netto"`
	BetragSatzNormalBrutto      *int64                                   `json:"Betrag-Satz-Normal-Brutto"`
	BetragSatzNormalNetto       *int64                                   `json:"Betrag-Satz-Normal-Netto"`
	BetragSatzNullBrutto        *int64                                   `json:"Betrag-Satz-Null-Brutto"`
	BetragSatzNullNetto         *int64                                   `json:"Betrag-Satz-Null-Netto"`
	ExternerBelegBelegkreis     *string                                  `json:"Externer-Beleg-Belegkreis"`
	ExternerBelegBezeichnung    *string                                  `json:"Externer-Beleg-Bezeichnung"`
	ExternerBelegReferenz       *string                                  `json:"Externer-Beleg-Referenz"`
	KassenID                    *string                                  `json:"Kassen-ID"`
	Kunde                       *string                                  `json:"Kunde"`
	Notizen                     []string                                 `json:"Notizen"`
	Posten                      []Posten                                 `json:"Posten"`
	Rabatte                     []Rabatt                                 `json:"Rabatte"`
	Storno                      *bool                                    `json:"Storno"`
	StornoBelegUUID             *string                                  `json:"Storno-Beleg-UUID"`
	StornoText                  *string                                  `json:"Storno-Text"`
	Training                    *bool                                    `json:"Training"`
	UnternehmenAdresse1         *string                                  `json:"Unternehmen-Adresse1"`
	UnternehmenAdresse2         *string                                  `json:"Unternehmen-Adresse2"`
	UnternehmenFusszeile        *string                                  `json:"Unternehmen-Fusszeile"`
	UnternehmenID               *string                                  `json:"Unternehmen-ID"`
	UnternehmenIDTyp            *SignierteBelegdatenUnternehmenIDTypEnum `json:"Unternehmen-ID-Typ"`
	UnternehmenKopfzeile        *string                                  `json:"Unternehmen-Kopfzeile"`
	UnternehmenName             *string                                  `json:"Unternehmen-Name"`
	UnternehmenOrt              *string                                  `json:"Unternehmen-Ort"`
	UnternehmenPlz              *string                                  `json:"Unternehmen-PLZ"`
	Zahlungen                   []Zahlung                                `json:"Zahlungen"`
	ZertifikatSeriennummer      *string                                  `json:"Zertifikat-Seriennummer"`
}
