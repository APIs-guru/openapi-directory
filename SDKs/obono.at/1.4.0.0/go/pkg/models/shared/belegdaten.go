package shared

type BelegdatenUnternehmenIDTypEnum string

const (
	BelegdatenUnternehmenIDTypEnumSteuernummer BelegdatenUnternehmenIDTypEnum = "steuernummer"
	BelegdatenUnternehmenIDTypEnumUID          BelegdatenUnternehmenIDTypEnum = "uid"
	BelegdatenUnternehmenIDTypEnumGln          BelegdatenUnternehmenIDTypEnum = "gln"
)

type Belegdaten struct {
	ExternerBelegBelegkreis  *string                         `json:"Externer-Beleg-Belegkreis"`
	ExternerBelegBezeichnung *string                         `json:"Externer-Beleg-Bezeichnung"`
	ExternerBelegReferenz    *string                         `json:"Externer-Beleg-Referenz"`
	Kunde                    *string                         `json:"Kunde"`
	Notizen                  []string                        `json:"Notizen"`
	Posten                   []Posten                        `json:"Posten"`
	Rabatte                  []Rabatt                        `json:"Rabatte"`
	Storno                   *bool                           `json:"Storno"`
	StornoBelegUUID          *string                         `json:"Storno-Beleg-UUID"`
	StornoText               *string                         `json:"Storno-Text"`
	Training                 *bool                           `json:"Training"`
	UnternehmenAdresse1      *string                         `json:"Unternehmen-Adresse1"`
	UnternehmenAdresse2      *string                         `json:"Unternehmen-Adresse2"`
	UnternehmenFusszeile     *string                         `json:"Unternehmen-Fusszeile"`
	UnternehmenID            *string                         `json:"Unternehmen-ID"`
	UnternehmenIDTyp         *BelegdatenUnternehmenIDTypEnum `json:"Unternehmen-ID-Typ"`
	UnternehmenKopfzeile     *string                         `json:"Unternehmen-Kopfzeile"`
	UnternehmenName          *string                         `json:"Unternehmen-Name"`
	UnternehmenOrt           *string                         `json:"Unternehmen-Ort"`
	UnternehmenPlz           *string                         `json:"Unternehmen-PLZ"`
	Zahlungen                []Zahlung                       `json:"Zahlungen"`
}
