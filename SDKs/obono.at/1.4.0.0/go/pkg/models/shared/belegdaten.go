package shared

type BelegdatenUnternehmenIDTypEnum string

const (
	BelegdatenUnternehmenIDTypEnumSteuernummer BelegdatenUnternehmenIDTypEnum = "steuernummer"
	BelegdatenUnternehmenIDTypEnumUID          BelegdatenUnternehmenIDTypEnum = "uid"
	BelegdatenUnternehmenIDTypEnumGln          BelegdatenUnternehmenIDTypEnum = "gln"
)

// Belegdaten
// The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
type Belegdaten struct {
	ExternerBelegBelegkreis  *string                         `json:"Externer-Beleg-Belegkreis,omitempty"`
	ExternerBelegBezeichnung *string                         `json:"Externer-Beleg-Bezeichnung,omitempty"`
	ExternerBelegReferenz    *string                         `json:"Externer-Beleg-Referenz,omitempty"`
	Kunde                    *string                         `json:"Kunde,omitempty"`
	Notizen                  []string                        `json:"Notizen,omitempty"`
	Posten                   []Posten                        `json:"Posten,omitempty"`
	Rabatte                  []Rabatt                        `json:"Rabatte,omitempty"`
	Storno                   *bool                           `json:"Storno,omitempty"`
	StornoBelegUUID          *string                         `json:"Storno-Beleg-UUID,omitempty"`
	StornoText               *string                         `json:"Storno-Text,omitempty"`
	Training                 *bool                           `json:"Training,omitempty"`
	UnternehmenAdresse1      *string                         `json:"Unternehmen-Adresse1,omitempty"`
	UnternehmenAdresse2      *string                         `json:"Unternehmen-Adresse2,omitempty"`
	UnternehmenFusszeile     *string                         `json:"Unternehmen-Fusszeile,omitempty"`
	UnternehmenID            *string                         `json:"Unternehmen-ID,omitempty"`
	UnternehmenIDTyp         *BelegdatenUnternehmenIDTypEnum `json:"Unternehmen-ID-Typ,omitempty"`
	UnternehmenKopfzeile     *string                         `json:"Unternehmen-Kopfzeile,omitempty"`
	UnternehmenName          *string                         `json:"Unternehmen-Name,omitempty"`
	UnternehmenOrt           *string                         `json:"Unternehmen-Ort,omitempty"`
	UnternehmenPlz           *string                         `json:"Unternehmen-PLZ,omitempty"`
	Zahlungen                []Zahlung                       `json:"Zahlungen,omitempty"`
}
