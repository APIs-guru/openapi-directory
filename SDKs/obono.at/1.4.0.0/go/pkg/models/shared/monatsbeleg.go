package shared



type Monatsbeleg struct {
    BelegUUID *string `json:"Beleg-UUID,omitempty"`
    FonGeprueftDatumUhrzeit *string `json:"FON-Geprueft-Datum-Uhrzeit,omitempty"`
    FonGeprueftErfolgreich *bool `json:"FON-Geprueft-Erfolgreich,omitempty"`
    Jahr *int64 `json:"Jahr,omitempty"`
    Monat *int64 `json:"Monat,omitempty"`
    
}

