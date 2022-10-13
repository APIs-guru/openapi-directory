package shared

type Monatsbeleg struct {
	BelegUUID               *string `json:"Beleg-UUID"`
	FonGeprueftDatumUhrzeit *string `json:"FON-Geprueft-Datum-Uhrzeit"`
	FonGeprueftErfolgreich  *bool   `json:"FON-Geprueft-Erfolgreich"`
	Jahr                    *int64  `json:"Jahr"`
	Monat                   *int64  `json:"Monat"`
}
